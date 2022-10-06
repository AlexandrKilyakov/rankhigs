import * as def from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".btn-list-more");

  if (btns) {
    btns.forEach((btn) => {
      const list = btn.parentElement.querySelectorAll(".list-show");

      if (list) {
        btn.addEventListener("click", () => {
          def.show(list);
          btn.remove();
        });
      }
    });
  }
});
