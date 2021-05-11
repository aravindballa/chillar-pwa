// import { precacheAndRoute } from "workbox-precaching";
import * as navigationPreload from "workbox-navigation-preload";
import { registerRoute, NavigationRoute } from "workbox-routing";
import { CacheFirst, NetworkOnly } from "workbox-strategies";

// precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  new RegExp("\\.(png|jpg|jpeg|svg)$"),
  new CacheFirst({ cacheName: "images" })
);

registerRoute(
  ({ request }) =>
    request.destination === "script" || request.destination === "style",
  new CacheFirst({
    cacheName: "static-resources",
  })
);

// Doesn't seem to work
// registerRoute(
//   new RegExp("\\.html$"),
//   new NetworkFirst({
//     cacheName: "shell",
//   })
// );

const CACHE_NAME = "html";
const FALLBACK_HTML_URL = "/index.html"; // Fallback is also main page

self.addEventListener("install", async (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.add(FALLBACK_HTML_URL))
  );
});

navigationPreload.enable();

const networkOnly = new NetworkOnly();
const navigationHandler = async (params) => {
  try {
    // Attempt a network request.
    return await networkOnly.handle(params);
  } catch (error) {
    // If it fails, return the cached HTML.
    return caches.match(FALLBACK_HTML_URL, {
      cacheName: CACHE_NAME,
    });
  }
};

// Register this strategy to handle all navigations.
registerRoute(new NavigationRoute(navigationHandler));
