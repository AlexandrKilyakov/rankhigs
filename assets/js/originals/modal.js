import * as def from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal");
  const login = document.querySelector("#btn-login");

  if (modal && login) {
    const modalEnter = modal.cloneNode(true);
    modal.remove();

    modalEnter.open = true;
    modalEnter.classList.remove("hide");

    modalEnter.addEventListener("click", (e) => {
      if (e.target) {
        if (
          e.target.classList.contains("modal") ||
          e.target.classList.contains("btn-close-modal")
        ) {
          def.hide(modalEnter);
        }
      }
    });

    login.addEventListener("click", (e) => {
      e.preventDefault();
      if (document.querySelector(".modal")) {
        def.show(modalEnter);
        return;
      }
      document.querySelector("body").appendChild(modalEnter);
    });
  } else if (modal && !login) {
    modal.remove();
  }
});
