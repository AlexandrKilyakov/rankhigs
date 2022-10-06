document.addEventListener("DOMContentLoaded", () => {
  const menuBar = document.querySelector(".menu-bar");

  if (menuBar) {
    const footer = document.querySelector(".main-footer");
    const header = document.querySelector(".main-header");

    if (header) {
      menuBar.style.height = `${innerHeight - header.offsetHeight}px`;
    }

    menuBar.nextElementSibling.style.marginLeft = `${menuBar.offsetWidth}px`;

    document.addEventListener("scroll", () => {
      if (scrollY + innerHeight >= footer.offsetTop) {
        menuBar.style.position = "absolute";
        menuBar.style.top = `${footer.offsetTop - innerHeight}px`;
        header.style.position = "absolute";
        header.style.top = `${footer.offsetTop - innerHeight}px`;
      } else if (menuBar.style.position == "absolute") {
        menuBar.style.position = "";
        menuBar.style.top = "0";
        header.style.position = "";
        header.style.top = "0";
      }
    });
  }
});
