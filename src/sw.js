// import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst, NetworkFirst } from "workbox-strategies";

// precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  new RegExp("\\.(png|jpg|jpeg|svg)$"),
  new CacheFirst({ cacheName: "images" })
);

registerRoute(
  ({ request }) =>
    request.destination === "script" || request.destination === "style",
  new Cas({
    cacheName: "static-resources",
  })
);

registerRoute(
  new RegExp("\\.html$"),
  new NetworkFirst({
    cacheName: "shell",
  })
);
