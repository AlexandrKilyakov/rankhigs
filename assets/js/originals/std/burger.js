document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");

  if (burger) {
    burger.addEventListener("click", () => {
      document.body.classList.toggle("show-menu");
    });
  }
});
