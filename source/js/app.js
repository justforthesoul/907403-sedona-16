if (matchMedia) {
  var screen = window.matchMedia("(max-width: 768px)");
  screen.addListener(changes);
  changes(screen);
}

function changes(screen) {
  var buttonTogler = document.querySelector(".main-nav button");
  var navList = document.querySelector(".main-nav__list");

  if (screen.matches) {
    buttonTogler.classList.remove("visually-hidden");
    buttonTogler.classList.remove("main-nav__button--closed");
    navList.classList.add("visually-hidden");
    console.log("1111");

    buttonTogler.addEventListener("click", function(evt) {
      evt.preventDefault();
      if (navList.classList.contains("visually-hidden")) {
        navList.classList.toggle("visually-hidden");
        buttonTogler.classList.toggle("main-nav__button--closed");
      } else {
        navList.classList.add("visually-hidden");
        buttonTogler.classList.remove("main-nav__button--closed");
      }
    });
  } else {
    console.log("2222");
    navList.classList.remove("visually-hidden");
  }
}
