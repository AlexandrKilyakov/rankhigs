document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.querySelectorAll(".accordion");
  const active = "accordion-show";

  if (accordion) {
    accordion.forEach((acc) => {
      acc.querySelectorAll(".accordion-child").forEach((child) => {
        if (!acc.classList.contains(active)) {
          child.style.height = "0px";
        } else {
          child.style.height = `${child.children[0].offsetHeight}px`;
        }
      });

      let child = acc.querySelector(".accordion-child");
      let arrow = acc.querySelector(".accordion-arrow");

      acc
        .querySelector(".accordion-name")
        .addEventListener("click", function () {
          if (child.offsetHeight == 0) {
            child.style.height = `${child.children[0].offsetHeight}px`;
          } else {
            child.style.height = `0px`;
          }
          arrow.classList.toggle("accordion-arrow-active");
          acc.classList.toggle(active);
        });
    });
  }
});
