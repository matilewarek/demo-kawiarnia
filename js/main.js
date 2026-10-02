"use strict";

document.documentElement.classList.add("js");

var przyciskMenu = document.getElementById("menu-przycisk");
var menu = document.getElementById("menu");

if (przyciskMenu && menu) {
  function ustawMenu(otwarte) {
    menu.classList.toggle("otwarte", otwarte);
    przyciskMenu.setAttribute("aria-expanded", otwarte ? "true" : "false");
  }

  przyciskMenu.addEventListener("click", function () {
    ustawMenu(!menu.classList.contains("otwarte"));
  });

  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") ustawMenu(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("otwarte")) {
      ustawMenu(false);
      przyciskMenu.focus();
    }
  });
}

var formularz = document.getElementById("formularz");

if (formularz) {
  var komunikat = document.getElementById("komunikat");
  var przyciskWyslij = document.getElementById("wyslij");
  przyciskWyslij.disabled = false;

  formularz.addEventListener("submit", function (e) {
    e.preventDefault();
    komunikat.textContent =
      "To jest wersja demonstracyjna – formularz w prawdziwej stronie wysyła wiadomość prosto na maila firmy";
    komunikat.className = "komunikat komunikat--ok";
    komunikat.hidden = false;
  });
}
