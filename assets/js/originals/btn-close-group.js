document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".btn-close-group");

  if (btns) {
    btns.forEach((close) => {
      close.addEventListener("click", () => {
        close.parentElement.remove();
      });
    });
  }
});
