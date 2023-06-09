import * as def from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const next = document.querySelector(".next-step");
  const finaly = document.querySelector(".reg-finaly");

  if (next && finaly) {
    const steps = document.querySelectorAll(".reg-from-details > details");
    let n = 0;

    next.addEventListener("click", () => {
      if (steps[n + 1]) {
        steps[n++].open = false;
        steps[n].open = true;
        def.show(steps[n]);
      } else {
        def.hide(next);
        def.show(finaly);
      }
    });
  }
});
