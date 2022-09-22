import * as def from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", function () {
  const template = document.querySelector(".template-enter");
  const login = document.querySelector("#btn-login");

  if (template && login) {
    const modalEnter = template.content.cloneNode(true);

    modalEnter.children[0].classList.add("modal-enter");
    def.show(modalEnter.children[0]);

    login.addEventListener("click", (e) => {
      e.preventDefault();
      if (document.querySelector(".modal-enter")) {
        def.show(document.querySelector(".modal-enter"));
      } else {
        document.body.appendChild(modalEnter);
        document
          .querySelector(".modal-enter")
          .addEventListener("click", (e) => {
            if (e.target) {
              if (
                e.target.classList.contains("modal") ||
                e.target.classList.contains("btn-close-modal")
              ) {
                def.hide(document.querySelector(".modal-enter"));
              }
            }
          });
      }
    });
  }
});
