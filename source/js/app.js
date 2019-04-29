var buttonTogler = document.querySelector(".main-nav button");
var navList = document.querySelector(".main-nav__list");

buttonTogler.classList.remove("main-nav__button--js");
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
