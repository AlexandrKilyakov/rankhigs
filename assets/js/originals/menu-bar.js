import * as def from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const menuBar = document.querySelector(".menu-bar");
  const tablet = document.querySelector(".tablet");
  const canvasResult = document.querySelector(".canvas-result");
  const chatsСontainer = document.querySelector(".chat-container");

  if (menuBar) {
    const footer = document.querySelector(".main-footer");
    const header = document.querySelector(".main-header");
    const heightStd = innerHeight - header.offsetHeight;

    if (header) {
      let maxBar = heightStd;
      menuBar.style.top = `${header.offsetHeight}px`;
      menuBar.style.height = `${maxBar}px`;
      if (tablet) {
        tablet.style.minHeight = `${maxBar}px`;

        if (canvasResult && canvasResult.previousElementSibling) {
          maxBar -= canvasResult.previousElementSibling.offsetHeight;
          canvasResult.style.minHeight = `${maxBar}px`;
          canvasResult.style.height = `${maxBar}px`;
        }

        if (chatsСontainer) {
          chatsСontainer.style.minHeight = `${heightStd}px`;
          chatsСontainer.style.height = `${heightStd}px`;
        }
      }

      window.addEventListener("resize", () => {
        menuBar.style.top = `${header.offsetHeight}px`;
        menuBar.style.maxHeight = `${innerHeight - header.offsetHeight}px`;
      });
    }

    // menuBar.nextElementSibling.style.marginLeft = `${menuBar.offsetWidth}px`;

    // document.addEventListener("scroll", () => {
    //   if (scrollY + innerHeight >= footer.offsetTop) {
    //     menuBar.style.position = "absolute";
    //     menuBar.style.top = `${footer.offsetTop - innerHeight}px`;
    //     header.style.position = "absolute";
    //     header.style.top = `${footer.offsetTop - innerHeight}px`;
    //   } else if (menuBar.style.position == "absolute") {
    //     menuBar.style.position = "";
    //     menuBar.style.top = "0";
    //     header.style.position = "";
    //     header.style.top = "0";
    //   }
    // });
  }
});
