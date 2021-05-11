const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  mode: "development",

  plugins: [
    new WorkboxPlugin.InjectManifest({
      swSrc: "./src/sw.js",
      swDest: "../service-worker.js",
    }),
  ],
};
