function handlePopupOpen(e) {
  e.preventDefault();

  document.querySelectorAll(".popup").forEach(function (elem) {
    elem.classList.remove("open");
  });

  document.querySelector(e.target.dataset.href).classList.add("open");

}

function handlePopupClose(e) {
  e.preventDefault();
  e.stopPropagation();
  document.querySelector(".popup.open").classList.remove("open");
}

function init() {
  document.querySelectorAll(".popup-link").forEach(function (elem) {
    elem.addEventListener("click", handlePopupOpen)
  });

  document.querySelectorAll(".popup-close").forEach(function (elem) {
    elem.addEventListener("click", handlePopupClose)
  });
}

document.addEventListener("DOMContentLoaded", init);