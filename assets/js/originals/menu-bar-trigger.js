document.addEventListener("DOMContentLoaded", () => {
  const btnShow = document.querySelector(".menu-bar-trigger");
  const menuBar = document.querySelector(".menu-bar");

  if (btnShow && menuBar) {
    const btnClose = menuBar.querySelector(".mb-close");

    document.addEventListener("click", (e) => {
      if (
        !(
          e.target.closest(".menu-bar-trigger") || e.target.closest(".menu-bar")
        )
      ) {
        if (menuBar.classList.contains("active")) {
          e.preventDefault();
          menuBar.classList.remove("active");
        }
      }
    });

    Array(btnClose, btnShow).forEach((btn) => {
      if (btn) {
        btn.addEventListener("click", () => {
          menuBar.classList.toggle("active");
        });
      }
    });
  }
});
