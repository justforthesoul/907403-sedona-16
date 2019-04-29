var form = document.querySelector(".feedback");
var sendBtn = document.querySelector(".feedback__send-btn");
var succesMessage = document.querySelector(".popup-succes");
var failureMessage = document.querySelector(".popup-failure");
var required = form.querySelectorAll(".required");
var failureButton = document.querySelector(".popup-failure__button");
var succesButton = document.querySelector(".popup-succes__button");

sendBtn.addEventListener("click", function() {
  for (var i = 0; i < required.length; i++) {
    if (
      required[0].value &&
      required[1].value &&
      required[2].value &&
      required[3].value
    ) {
      succesMessage.classList.remove("popup-succes--js");
      if (!failureMessage.classList.contains("popup-failure--js")) {
        failureMessage.classList.add("popup-failure--js");
      }
    } else {
      failureMessage.classList.remove("popup-failure--js");
      if (!succesButton.classList.contains("popup-succes--js")) {
        succesMessage.classList.add("popup-succes--js");
      }
    }
  }
});

failureButton.addEventListener("click", function() {
  failureMessage.classList.add("popup-failure--js");
});

succesButton.addEventListener("click", function() {
  succesMessage.classList.add("popup-succes--js");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (
      !failureMessage.classList.contains("popup-failure--js") ||
      !succesButton.classList.contains("popup-succes--js")
    ) {
      failureMessage.classList.add("popup-failure--js");
      succesMessage.classList.add("popup-succes--js");
    }
  }
});
