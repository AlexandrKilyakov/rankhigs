import * as def from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelectorAll(".modal");
  const modalRemoveRequest = document.querySelector("#remove-the-request");
  const btnRemoveRequest = document.querySelectorAll(
    ".show-remove-the-request"
  );

  if (modal) {
    modal.forEach((element) => {
      element.addEventListener("click", (e) => {
        if (e.target) {
          if (
            e.target.classList.contains("modal") ||
            e.target.classList.contains("btn-close-modal") ||
            e.target.classList.contains("close-modal")
          ) {
            def.hide(element);
          }
        }
      });
    });
  }

  if (btnRemoveRequest && modalRemoveRequest) {
    btnRemoveRequest.forEach((btn) => {
      btn.addEventListener("click", () => {
        def.show(modalRemoveRequest);
      });
    });
  }
});
