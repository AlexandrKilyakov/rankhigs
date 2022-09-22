document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".main-header");

  if (header) {
    header.nextElementSibling.style.marginTop = `${header.offsetHeight}px`;
  }
});
