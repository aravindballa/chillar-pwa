!function(){"use strict";var e={isLoading:!0,spinner:document.querySelector(".loader"),container:document.querySelector(".main"),error:document.querySelector(".no-network")};document.getElementById("butRefresh").addEventListener("click",(function(){e.getPriceData()})),e.getPriceData=async function(){try{const{bpi:{INR:{rate:t}},time:{updated:r}}=await(await fetch("https://api.coindesk.com/v1/bpi/currentprice/EUR")).json();console.log(t,r),e.updatePrice(t,r)}catch(t){e.spinner.setAttribute("hidden",!0),e.error.style.display="flex"}},e.updatePrice=function(t,r){e.isLoading=!1,e.error.style.display="none",e.spinner.setAttribute("hidden",!0),console.log(e.container),e.container.removeAttribute("hidden"),document.querySelector("#curr").innerHTML=t,document.querySelector("#last-update").innerHTML=r},e.getPriceData(),"serviceWorker"in navigator&&navigator.serviceWorker.register("./dist/service-worker.js").then((function(){console.log("Service Worker Registered")}))}();