import * as def from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".response-n4");

  if (items) {
    let max = items[0].offsetWidth;
    for (let i = 1; i < items.length; i++) {
      if (max < items[i].offsetWidth) {
        max = items[i].offsetWidth;
      }
    }

    items[0].style.width = `${
      max + def.getNumber(def.getCss(items[1].parentElement, "gap"))
    }px`;
  }
});
