document.addEventListener("DOMContentLoaded", () => {
  const checkShow = document.querySelectorAll("[type='checkbox'][data-show]");
  const checkHide = document.querySelectorAll("[type='checkbox'][data-hide]");
  const clickForm = document.querySelectorAll("[data-click-form]");

  if (checkShow.length) {
    checkShow.forEach((item) => {
      let el = document.querySelector(`[data-var="${item.dataset.show}"]`);

      if (!el) {
        return;
      }

      item.addEventListener("input", () => {
        if (item.checked) {
          el.classList.remove("hide");
          el.removeAttribute("hidden");
        } else {
          el.classList.add("hide");
          el.setAttribute("hidden", "true");
        }
      });
    });
  }

  if (checkHide.length) {
    checkHide.forEach((item) => {
      let el = document.querySelector(`[data-var="${item.dataset.hide}"]`);

      if (!el) {
        return;
      }

      item.addEventListener("input", () => {
        if (!item.checked) {
          el.classList.remove("hide");
          el.removeAttribute("hidden");
        } else {
          el.classList.add("hide");
          el.setAttribute("hidden", "true");
        }
      });
    });
  }

  if (clickForm.length) {
    clickForm.forEach((item) => {
      let el = document.querySelector(
        `[data-form="${item.dataset.clickForm}"]`
      );

      if (!el) {
        return;
      }

      item.addEventListener("click", () => {
        if (el.classList.contains("hide")) {
          el.classList.remove("hide");
          el.removeAttribute("hidden");
        } else {
          el.classList.add("hide");
          el.setAttribute("hidden", "true");
        }
      });
    });
  }
});
