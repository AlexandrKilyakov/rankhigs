import * as def from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const arr = [".modal-respond", ".dispute-review", ".textarea-disabled"];

  arr.forEach((cls) => {
    let item = document.querySelector(cls);

    if (item) {
      let text = item.querySelector("textarea");
      let submit = item.querySelector(".btn-submit");

      text.addEventListener("input", () => {
        if (text.value.length > 10) {
          submit.removeAttribute("disabled");
        } else {
          submit.setAttribute("disabled", true);
        }
      });
    }
  });
});
