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
