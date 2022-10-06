import * as def from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const btnResponds = document.querySelectorAll(".btn-respond");
  const modalResponds = document.querySelector(".modal-respond");

  if (btnResponds && modalResponds) {
    let text = modalResponds.querySelector("textarea");
    let submit = modalResponds.querySelector(".btn-submit");

    text.addEventListener("input", () => {
      if (text.value.length > 10) {
        submit.removeAttribute("disabled");
      } else {
        console.log(1);
        submit.setAttribute("disabled", true);
      }
    });
    btnResponds.forEach((btn) => {
      btn.addEventListener("click", () => {
        let name = modalResponds.querySelector(".respond-name");
        let title =
          btn.parentElement.parentElement.querySelector(".title-respond");

        if (name && title) {
          name.innerText = title.innerText;
        }

        def.show(modalResponds);
      });
    });
  }
});
