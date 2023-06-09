import * as def from "../modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".btn-tag-more");

  if (btns) {
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        def.show(btn.parentElement.querySelectorAll(".tag-more"));
        btn.remove();
      });
    });
  }
});
