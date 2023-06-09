document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider--photo");

  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => {
    let view = slider.querySelector(".view");
    let slides = slider.querySelectorAll(".slider-track .slide");
    let active = "";

    slides.forEach((slide) => {
      slide.addEventListener("click", () => {
        if (slide.classList.contains("active")) {
          return;
        }

        active = slide.parentElement.querySelector(".active");

        if (active) {
          active.classList.remove("active");
        }
        view.style.backgroundImage = slide.style.backgroundImage;
        slide.classList.add("active");
      });
    });
  });
});
