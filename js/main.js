// Cały JavaScript strony: menu mobilne i komunikat demo formularza.
// Bez tego pliku strona nadal działa (menu jako lista, przycisk formularza nieaktywny).
"use strict";

// Klasa "js" włącza style dla hamburgera (patrz css/style.css)
document.documentElement.classList.add("js");

// ---------- Menu mobilne ----------
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

  // Kliknięcie w link zamyka menu
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") ustawMenu(false);
  });

  // Escape zamyka menu i wraca na przycisk
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("otwarte")) {
      ustawMenu(false);
      przyciskMenu.focus();
    }
  });
}

// ---------- Formularz: tryb demo, nic nie jest wysyłane ani zapisywane ----------
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
