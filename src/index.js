(function () {
  "use strict";

  var app = {
    isLoading: true,
    spinner: document.querySelector(".loader"),
    container: document.querySelector(".main"),
    error: document.querySelector(".no-network"),
  };

  document.getElementById("butRefresh").addEventListener("click", function () {
    app.getPriceData();
  });

  app.getPriceData = async function () {
    try {
      const {
        bpi: {
          INR: { rate },
        },
        time: { updated },
      } = await (
        await fetch("https://api.coindesk.com/v1/bpi/currentprice/EUR")
      ).json();
      console.log(rate, updated);
      app.updatePrice(rate, updated);
    } catch (e) {
      app.spinner.setAttribute("hidden", true);
      app.error.style.display = "flex";
    }
  };

  app.updatePrice = function (price, date) {
    app.isLoading = false;
    app.error.style.display = "none";
    app.spinner.setAttribute("hidden", true);
    console.log(app.container);
    app.container.removeAttribute("hidden");

    document.querySelector("#curr").innerHTML = price;
    document.querySelector("#last-update").innerHTML = date;
  };

  app.getPriceData();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./dist/service-worker.js")
      .then(function () {
        console.log("Service Worker Registered");
      });
  }
})();
