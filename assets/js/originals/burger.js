import * as def from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".mh-nav");

  if (burger && menu) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("close");
      menu.classList.toggle("active");
    });
  }

  if (innerWidth <= 467) {
    const options = document.querySelector(".login-options");
    const footer = document.querySelector(".main-footer");

    if (options) {
      footer.style.paddingBottom = `${
        def.getNumber(def.getCss(footer, "padding-bottom")) +
        options.offsetHeight
      }px`;
    }
  }
});
