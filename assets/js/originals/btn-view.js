document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".btn-view");
  const active = "btn-view-active";

  if (btns) {
    const content = document.querySelector(".variants-uslugi");

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!btn.classList.contains(active)) {
          btn.parentElement
            .querySelector(`.${active}`)
            .classList.remove(active);
          btn.classList.add(active);

          if (content.classList.contains("grid-3")) {
            content.classList.remove("grid-3");
            content.classList.add("grid-1");
          } else {
            content.classList.remove("grid-1");
            content.classList.add("grid-3");
          }
        }
      });
    });
  }
});
