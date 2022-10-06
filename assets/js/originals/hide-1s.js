import * as def from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const hides = document.querySelectorAll(".hide-1s");

  if (hides) {
    setTimeout(() => {
      hides.forEach((el) => {
        def.hide(el);
      });
    }, 1000);
  }
});
