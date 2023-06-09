document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('[data-click="reject-application"]');
  const textClose = document.querySelector('[data-role="text-close"]');

  if (btn && textClose) {
    const text = textClose.querySelector("textarea");

    btn.addEventListener("click", () => {
      textClose.classList.remove("hide");
      text.setAttribute("required", "required");
      setTimeout(() => {
        btn.type = "submit";
      }, 100);
    });
  }
});
