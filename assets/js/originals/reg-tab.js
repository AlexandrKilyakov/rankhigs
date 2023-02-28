import * as def from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const regTabs = document.querySelectorAll(".reg-tabs");

  if (regTabs) {
    regTabs.forEach((tab) => {
      const activeTab = "reg-tab-active";

      const regTab = tab.querySelectorAll(".reg-tab");
      const face = tab.querySelector(`#js-face`);
      const forEntity = tab.querySelectorAll(".for-entity");
      const forIndividual = tab.querySelectorAll(".for-individual");

      regTab.forEach((link) => {
        link.addEventListener("click", () => {
          if (!link.classList.contains(activeTab)) {
            if (tab.querySelector(`.${activeTab}`)) {
              tab.querySelector(`.${activeTab}`).classList.remove(activeTab);
            }
            link.classList.add(activeTab);
            face.value = link.id;

            if (link.id == "entity") {
              def.hide(forIndividual);
              def.show(forEntity);
            } else if (link.id == "individual") {
              def.hide(forEntity);
              def.show(forIndividual);
            }
          }
        });
      });
    });
  }
});
