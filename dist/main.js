/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("(function () {\n  \"use strict\";\n\n  var app = {\n    isLoading: true,\n    spinner: document.querySelector(\".loader\"),\n    container: document.querySelector(\".main\"),\n    error: document.querySelector(\".no-network\"),\n  };\n\n  document.getElementById(\"butRefresh\").addEventListener(\"click\", function () {\n    app.getPriceData();\n  });\n\n  app.getPriceData = async function () {\n    try {\n      const {\n        bpi: {\n          EUR: { rate },\n        },\n        time: { updated },\n      } = await (\n        await fetch(\"https://api.coindesk.com/v1/bpi/currentprice/EUR\")\n      ).json();\n      console.log(rate, updated);\n      app.updatePrice(rate, updated);\n    } catch (e) {\n      console.error(e);\n      app.spinner.setAttribute(\"hidden\", true);\n      app.error.style.display = \"flex\";\n    }\n  };\n\n  app.updatePrice = function (price, date) {\n    app.isLoading = false;\n    app.error.style.display = \"none\";\n    app.spinner.setAttribute(\"hidden\", true);\n    console.log(app.container);\n    app.container.removeAttribute(\"hidden\");\n\n    document.querySelector(\"#curr\").innerHTML = price;\n    document.querySelector(\"#last-update\").innerHTML = date;\n  };\n\n  app.getPriceData();\n\n  if (\"serviceWorker\" in navigator) {\n    navigator.serviceWorker.register(\"service-worker.js\").then(function () {\n      console.log(\"Service Worker Registered\");\n    });\n  }\n})();\n\n\n//# sourceURL=webpack://chillar-pwa/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;