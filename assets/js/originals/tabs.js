import * as def from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const tabsCarts = document.querySelectorAll(".tabs-carts"); // При работе со слайдером карточек
  const active = "tab-active";

  if (tabsCarts) {
    tabsCarts.forEach((tabsCart) => {
      const tabs = tabsCart.querySelector(".tabs");
      const posts = tabsCart.querySelector(".tabs-posts");

      if (tabs && posts) {
        const children = posts.children;

        tabs.addEventListener("click", (e) => {
          if (
            e.target &&
            e.target.classList.contains("tab") &&
            !e.target.classList.contains(active)
          ) {
            tabs.querySelector(`.${active}`).classList.remove(active);
            e.target.classList.add(active);

            if (e.target.dataset["group"]) {
              for (let i = 0; i < children.length; i++) {
                if (children[i].dataset["group"] == e.target.dataset["group"]) {
                  def.show(children[i]);
                } else {
                  def.hide(children[i]);
                }
              }
            } else {
              for (let i = 0; i < children.length; i++) {
                def.show(children[i]);
              }
            }

            for (let i = 0; i < sliderProgress.length; i++) {
              if (sliderProgress[i].slider == posts.parentElement) {
                sliderProgress[i].start();
                i = sliderProgress.length;
              }
            }
          }
        });
      }
    });
  }
});
