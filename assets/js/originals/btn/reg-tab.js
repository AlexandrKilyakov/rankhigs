import * as def from "../modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const regTabs = document.querySelectorAll(".reg-tabs");

  if (regTabs) {
    regTabs.forEach((tab) => {
      const activeTab = "reg-tab-active";

      const regTab = tab.querySelectorAll(".reg-tab");
      const face = tab.querySelector(`#js-face`);
      const el = tab.querySelectorAll("[class*='for-']");

      if (el.length) {
        el.forEach((item) => {
          let btn = item.querySelector(".btn-submit");
          let requiredes = item.querySelectorAll("[required]");

          if (btn && requiredes.length) {
            requiredes.forEach((input) => {
              input.addEventListener("input", () => {
                console.log(setDisabled(requiredes));
                btn.disabled = setDisabled(requiredes);
              });
            });
          }
        });
      }

      regTab.forEach((link) => {
        link.addEventListener("click", () => {
          if (!link.classList.contains(activeTab)) {
            if (tab.querySelector(`.${activeTab}`)) {
              tab.querySelector(`.${activeTab}`).classList.remove(activeTab);
            }
            link.classList.add(activeTab);
            face.value = link.id;

            if (el.length) {
              def.hide(el);

              el.forEach((item) => {
                if (item.classList.contains(`for-${link.id}`)) {
                  item.classList.remove("hide");
                }
              });
            }
          }
        });
      });
    });
  }
});

function setDisabled(requiredes) {
  let must = false;
  requiredes.forEach((required) => {
    if (!required.validity.valid) {
      must = true;
    }
  });
  return must;
}
