import * as def from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  if (innerWidth < 1467) {
    return false;
  }
  const items = document.querySelectorAll(".js-stat-date");

  if (items) {
    items.forEach((item) => {
      const el =
        item.parentElement.parentElement.querySelector(".response-header");
      let max = el.children.length;
      const w =
        def.getNumber(def.getCss(item.parentElement, "gap")) * 2 +
        (el.children[max - 1].offsetLeft - el.children[max - 2].offsetLeft);

      item.style.width = `${w}px`;
      item.style.minWidth = `${w}px`;
    });
  }
});
