(function () {
var buttonTogler = document.querySelector(".main-nav button");
var navList = document.querySelector(".main-nav__list");

buttonTogler.classList.remove("visually-hidden");
buttonTogler.classList.remove("main-nav__button--closed");
navList.classList.add("main-nav__list--closed");

buttonTogler.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (navList.classList.contains("main-nav__list--closed")) {
    navList.classList.remove("main-nav__list--closed");
    buttonTogler.classList.add("main-nav__button--closed");
  } else {
    navList.classList.add("main-nav__list--closed");
    buttonTogler.classList.remove("main-nav__button--closed");
  }
});

var form = document.querySelector(".feedback");
var sendBtn = document.querySelector(".feedback__send-btn");
var succesMessage = document.querySelector(".popup-succes");
var failureMessage = document.querySelector(".popup-failure");
var required = form.querySelectorAll(".required");
var failureButton = document.querySelector(".popup-failure__button");
var succesButton = document.querySelector(".popup-succes__button");

sendBtn.addEventListener("click", function() {

  for (var i = 0; i < required.length; i++) {
    if (required[i].value) {
      succesMessage.classList.remove("visually-hidden");
      if (!failureMessage.classList.contains("visually-hidden")) {
        failureMessage.classList.add("visually-hidden");
      }
    } else {
      failureMessage.classList.remove("visually-hidden");
      if (!succesButton.classList.contains("visually-hidden")) {
        succesMessage.classList.add("visually-hidden");
      }
    }
  }
});

failureButton.addEventListener("click", function() {
  failureMessage.classList.add("visually-hidden");
});

succesButton.addEventListener("click", function() {
  succesMessage.classList.add("visually-hidden");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (
      !failureMessage.classList.contains("visually-hidden") ||
      !succesButton.classList.contains("visually-hidden")
    ) {
      failureMessage.classList.add("visually-hidden");
      succesMessage.classList.add("visually-hidden");
    }
  }
});
}());
