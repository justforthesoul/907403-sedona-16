(function () {
var buttonTogler = document.querySelector(".main-nav button");
var navList = document.querySelector(".main-nav__list");

buttonTogler.classList.remove("display-none");
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

sendBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  for (var i = 0; i < required.length; i++) {
    if (required[i].value) {
      succesMessage.classList.remove("display-none");
      if (!failureMessage.classList.contains("display-none")) {
        failureMessage.classList.add("display-none");
      }
    } else {
      failureMessage.classList.remove("display-none");
      if (!succesButton.classList.contains("display-none")) {
        succesMessage.classList.add("display-none");
      }
    }
  }
});

failureButton.addEventListener("click", function() {
  failureMessage.classList.add("display-none");
});

succesButton.addEventListener("click", function() {
  succesMessage.classList.add("display-none");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (
      !failureMessage.classList.contains("display-none") ||
      !succesButton.classList.contains("display-none")
    ) {
      failureMessage.classList.add("display-none");
      succesMessage.classList.add("display-none");
    }
  }
});
}());
