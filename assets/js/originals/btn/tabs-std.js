import * as def from "../modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const tabsStd = document.querySelectorAll("*[data-tab]");
  const active = "tab-active";

  if (tabsStd) {
    tabsStd.forEach((tabsTarget) => {
      const tabs = tabsTarget.children;
      const posts = tabsTarget.nextElementSibling.children;

      tabsTarget.addEventListener("click", (e) => {
        if (
          e.target &&
          e.target.classList.contains("tab") &&
          !e.target.classList.contains(active)
        ) {
          for (let i = 0; i < tabs.length; i++) {
            if (e.target == tabs[i]) {
              tabsTarget.querySelector(`.${active}`).classList.remove(active);
              e.target.classList.add(active);

              def.hide(posts);
              def.show(posts[i]);
            }
          }
        }
      });
    });
  }
});
