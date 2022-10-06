import * as def from "./modules/functions.js";

class Slider {
  slider;
  track;
  slides;
  meter;
  btnLeft;
  btnRight;

  steps;
  step;
  n;
  children;
  margin;

  constructor(slider) {
    this.slider = slider;
    this.track = slider.querySelector(".slider-track");
    this.meter = slider.querySelector("meter");
    this.btnLeft = slider.querySelector(".btn-left");
    this.btnRight = slider.querySelector(".btn-right");

    this.start();
    this.interactiveScreen();
  }

  start() {
    this.slides = [];

    Array.from(this.track.children).forEach((el) => {
      if (!el.classList.contains("hide")) {
        this.slides.push(el);
      }
    });

    this.steps = [0];
    this.step = 0;
    this.n = 0;
    this.children = this.slides.length - 1;
    this.margin = this.slides[1].offsetLeft - this.slides[0].offsetWidth;

    this.track.style.transform = `translateX(-${this.steps[0]}px)`;

    this.btnLeft.onclick = false;
    this.btnRight.onclick = false;

    this.setSteps();
    this.addTriggers();
  }

  setSteps() {
    for (let i = 0; i < this.slides.length; i++) {
      if (
        (this.slides[i].offsetLeft + this.slides[i].offsetWidth + this.margin) %
          (this.track.offsetWidth + this.margin) ==
        0
      ) {
        this.steps.push(
          this.slides[i].offsetLeft + this.slides[i].offsetWidth + this.margin
        );
      }
    }

    if (
      this.steps[this.steps.length - 1] <
      this.slides[this.children].offsetLeft +
        this.slides[this.children].offsetWidth +
        this.margin
    ) {
      if (
        (this.slides[this.children].offsetLeft +
          this.slides[this.children].offsetWidth +
          this.margin) %
          (this.track.offsetWidth + this.margin) ==
        0
      ) {
        for (let i = this.children; i > 0; i--) {
          if (
            (this.slides[i].offsetLeft + this.slides[i].offsetWidth) %
              this.track.offsetWidth ==
            0
          ) {
            this.steps.push(
              this.slides[i + 1].offsetLeft +
                this.slides[i + 1].offsetWidth +
                this.margin
            );
            i = 0;
          }
        }
      }
    }
  }

  addTriggers() {
    this.n = this.steps.length;

    if (this.steps[this.n - 1] <= this.slides[this.children].offsetLeft) {
      def.show(this.meter);
      def.show(this.slider.querySelector(".slider-nav"));
      this.slider.style.height = "";

      this.meter.value = `${1 / this.n}`;

      this.btnLeft.onclick = () => {
        this.step--;
        if (this.step < 0) {
          this.step = this.n - 1;
        }

        this.track.style.transform = `translateX(-${this.steps[this.step]}px)`;
        this.meter.value = `${(this.step + 1) / this.n}`;
      };

      this.btnRight.onclick = () => {
        this.step++;
        if (this.step > this.n - 1) {
          this.step = 0;
        }

        this.track.style.transform = `translateX(-${this.steps[this.step]}px)`;
        this.meter.value = `${(this.step + 1) / this.n}`;
      };
    } else {
      def.hide(this.meter);
      def.hide(this.slider.querySelector(".slider-nav"));
      this.slider.style.height = `${this.slider.offsetHeight + 2}px`;
    }
  }

  interactiveScreen() {
    this.x = 0;

    this.slider.addEventListener("mousedown", (e) => {
      this.x = e.pageX;
    });

    this.slider.addEventListener("mouseup", (e) => {
      if (this.x > e.pageX) {
        this.btnRight.click();
      } else if (this.x < e.pageX) {
        this.btnLeft.click();
      }
    });

    this.slider.addEventListener("touchstart", (e) => {
      this.x = e.touches[0].pageX;
    });

    this.slider.addEventListener("touchend", (e) => {
      if (this.x > e.changedTouches[0].pageX) {
        this.btnRight.click();
      } else if (this.x < e.changedTouches[0].pageX) {
        this.btnLeft.click();
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider");
  window.sliderProgress = [];

  if (sliders) {
    sliders.forEach((slider) => {
      sliderProgress.push(new Slider(slider));
    });
  }
});
