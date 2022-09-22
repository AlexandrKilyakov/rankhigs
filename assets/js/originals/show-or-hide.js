import * as def from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".show-or-hide");

  if (options) {
    options.forEach((option) => {
      const checkbox = option.querySelectorAll('input[type="checkbox"]');
      const content = option.querySelector(".only-yes");

      checkbox.forEach((check) => {
        check.addEventListener("change", () => {
          if (check.dataset["value"] && check.dataset["value"] == "yes") {
            def.show(content);
          } else {
            def.hide(content);
          }
        });
      });
    });
  }
});
