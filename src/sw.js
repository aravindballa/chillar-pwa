import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  new RegExp("\\.(png|jpg|jpeg|svg)$"),
  new CacheFirst({ cacheName: "images" })
);
registerRoute(new RegExp("\\.js$"), new CacheFirst({ cacheName: "js" }));
