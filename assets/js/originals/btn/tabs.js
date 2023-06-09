import * as def from "../modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const tabsCarts = document.querySelectorAll(".tabs-carts"); // При работе со слайдером карточек
  const active = "tab-active";

  if (tabsCarts) {
    tabsCarts.forEach((tabsCart) => {
      const tabs = tabsCart.querySelector(".tabs");
      const tabsNav = tabsCart.querySelector(".tabs-nav");
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

      if (tabsNav && posts) {
        const btns = tabsNav.parentElement.querySelectorAll(".slider-btn");

        tabsNav.addEventListener("click", (e) => {
          if (
            e.target &&
            e.target.classList.contains("tab") &&
            !e.target.classList.contains(active)
          ) {
            let btnClicks =
              Array.prototype.indexOf.call(tabsNav.children, e.target) -
              Array.prototype.indexOf.call(
                tabsNav.children,
                tabsNav.querySelector(`.${active}`)
              );
            if (btnClicks > 0) {
              for (let i = 0; i < btnClicks; i++) {
                btns[1].click();
              }
            } else {
              for (let i = btnClicks; i < 0; i++) {
                btns[0].click();
              }
            }

            tabsNav.querySelector(`.${active}`).classList.remove(active);
            e.target.classList.add(active);
          }
        });

        btns[0].addEventListener("click", () => {
          let i = Array.prototype.indexOf.call(
            tabsNav.children,
            tabsNav.querySelector(`.${active}`)
          );

          tabsNav.querySelector(`.${active}`).classList.remove(active);
          tabsNav.children[
            --i < 0 ? tabsNav.children.length - 1 : i
          ].classList.add(active);
        });

        btns[1].addEventListener("click", () => {
          let i = Array.prototype.indexOf.call(
            tabsNav.children,
            tabsNav.querySelector(`.${active}`)
          );

          tabsNav.querySelector(`.${active}`).classList.remove(active);
          tabsNav.children[
            ++i > tabsNav.children.length - 1 ? 0 : i
          ].classList.add(active);
        });
      }
    });
  }
});
