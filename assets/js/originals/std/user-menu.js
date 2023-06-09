import * as def from "../modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  if (innerWidth > 1067) {
    const burgerLog = document.querySelector(".burger-log");
    const userMenu = document.querySelector(".user-menu");

    if (burgerLog && userMenu) {
      burgerLog.addEventListener("click", () => {
        def.show(userMenu);
      });

      userMenu.addEventListener("click", (e) => {
        if (e.target) {
          if (
            e.target.classList.contains("user-menu") ||
            e.target.classList.contains("btn-close")
          ) {
            def.hide(userMenu);
          }
        }
      });
    }
  }
});
