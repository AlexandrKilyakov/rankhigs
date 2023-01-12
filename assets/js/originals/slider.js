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
    this.meter = slider.querySelector(".meter");
    this.btnLeft = slider.querySelector(".btn-left");
    this.btnRight = slider.querySelector(".btn-right");

    this.start();
    this.interactiveScreen();
  }

  start() {
    this.slides = [];

    this.slides.push(...this.track.children);

    this.steps = [0];
    this.step = 0;
    this.n = 0;
    this.children = this.slides.length - 1;
    this.margin = this.slides[1].offsetLeft - this.slides[0].offsetWidth;

    this.setTrackTransform(this.steps[0]);

    this.btnLeft.onclick = false;
    this.btnRight.onclick = false;

    this.setSteps();
    this.addTriggers();
  }

  setSteps() {
    let k = 1;

    for (let i = 0; i < this.slides.length; i++) {
      if (this.slides[i].offsetLeft - this.track.offsetWidth * k > 0) {
        this.steps.push(this.slides[i].offsetLeft);
        k++;
      }
    }
  }

  addTriggers() {
    this.n = this.steps.length;

    if (this.n > 1) {
      def.show(this.meter);
      def.show(this.slider.querySelector(".slider-nav"));
      this.slider.style.height = "";

      this.setMeterWidth(1 / this.n);

      this.btnLeft.onclick = () => {
        this.step = --this.step < 0 ? this.n - 1 : this.step;

        this.setTrackTransform(this.steps[this.step]);
        this.setMeterWidth((this.step + 1) / this.n);
      };

      this.btnRight.onclick = () => {
        this.step = ++this.step > this.n - 1 ? 0 : this.step;

        this.setTrackTransform(this.steps[this.step]);
        this.setMeterWidth((this.step + 1) / this.n);
      };
    } else {
      def.hide(this.meter);
      def.hide(this.slider.querySelector(".slider-nav"));
      this.slider.style.height = `${this.slider.offsetHeight + 2}px`;
    }
  }

  setTrackTransform(x) {
    this.track.style.transform = `translateX(-${x}px)`;
  }

  setMeterWidth(w) {
    this.meter.style.width = `${w * 100}%`;
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
