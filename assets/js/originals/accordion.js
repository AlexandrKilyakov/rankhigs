document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.querySelectorAll(".accordion");

  if (accordion) {
    accordion.forEach((acc) => {
      acc.querySelectorAll(".accordion-child").forEach((child) => {
        child.style.height = "0px";
      });

      let child = acc.querySelector(".accordion-child");
      let arrow = acc.querySelector(".accordion-arrow");

      acc
        .querySelector(".accordion-name")
        .addEventListener("click", function () {
          if (child.offsetHeight == 0) {
            child.style.height = `${child.children[0].offsetHeight}px`;
            if (!arrow.classList.contains("accordion-arrow-active"))
              arrow.classList.add("accordion-arrow-active");
            if (!acc.classList.contains("accordion-show")) {
              acc.classList.add("accordion-show");
            }
          } else {
            child.style.height = `0px`;
            if (arrow.classList.contains("accordion-arrow-active"))
              arrow.classList.remove("accordion-arrow-active");
            if (acc.classList.contains("accordion-show")) {
              acc.classList.remove("accordion-show");
            }
          }
        });
    });
  }
});
