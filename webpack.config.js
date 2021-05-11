const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  mode: "production",

  plugins: [
    // new WorkboxPlugin.GenerateSW({
    //   // Do not precache images
    //   // exclude: [/\.(?:png|jpg|jpeg|svg)$/],
    //   include: [/\.html$/],

    //   // Define runtime caching rules.
    //   runtimeCaching: [
    //     {
    //       // Match any request that ends with .png, .jpg, .jpeg or .svg.
    //       urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

    //       // Apply a cache-first strategy.
    //       handler: "CacheFirst",

    //       options: {
    //         // Use a custom cache name.
    //         cacheName: "assets",

    //         // Only cache 10 images.
    //         expiration: {
    //           maxEntries: 10,
    //         },
    //       },
    //     },
    //     {
    //       urlPattern: /\.(js|css)$/,
    //       // Apply a cache-first strategy.
    //       handler: "CacheFirst",
    //       options: {
    //         cacheName: "assets",
    //         expiration: {
    //           maxEntries: 10,
    //         },
    //       },
    //     },
    //     // {
    //     //   urlPattern: /\.html$/,
    //     //   handler: "NetworkFirst",

    //     //   options: {
    //     //     cacheName: "assets",
    //     //   },
    //     // },
    //   ],
    // }),
    new WorkboxPlugin.InjectManifest({
      swSrc: "./src/sw.js",
      swDest: "service-worker.js",
    }),
  ],
};
