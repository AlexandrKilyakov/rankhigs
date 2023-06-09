import * as def from "../modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  if (main) {
    main.addEventListener("click", (e) => {
      if (e.target) {
        if (e.target.classList.contains("btn-list-more")) {
          const list = e.target.parentElement.querySelectorAll(".list-show");

          if (list) {
            def.show(list);
            e.target.remove();
          }
        }
      }
    });
  }
});
