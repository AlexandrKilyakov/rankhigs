function getHeight(el) {
  if (innerWidth < 467) {
    const login = document.querySelector(".login-options");
    if (login) {
      return innerHeight - el.offsetTop - login.offsetHeight;
    }
  }
  return innerHeight - el.offsetTop;
}

function getHeightMain(el, main) {
  if (innerWidth < 467) {
    const login = document.querySelector(".login-options");
    if (login) {
      return innerHeight - main.offsetTop - login.offsetHeight;
    }
  }
  return innerHeight - main.offsetTop;
}

function resizeFull(el) {
  if (el) {
    el.style.height = `${getHeight(el)}px`;

    window.addEventListener("resize", () => {
      el.style.height = `${getHeight(el)}px`;
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuBar = document.querySelector(".menu-bar");
  const main = document.querySelector("main");
  const removeGlobalScroll = document.querySelector(".remove-global-scroll");

  if (innerWidth > 1067) {
    const mainHeader = document.querySelector(".main-header");

    if (mainHeader) {
      document.body.style.setProperty("--mh", `${mainHeader.offsetHeight}px`);
    }
  }

  if (menuBar && innerWidth > 1067) {
    menuBar.style.top = `${main.offsetTop}px`;
    menuBar.style.maxHeight = `${getHeightMain(menuBar, main)}px`;

    window.addEventListener("resize", () => {
      menuBar.style.top = `${main.offsetTop}px`;
      menuBar.style.maxHeight = `${getHeightMain(menuBar, main)}px`;
    });
  }

  if (removeGlobalScroll) {
    const tablet = document.querySelector(".tablet");
    const tabletScroll = document.querySelector(".tablet-scroll");
    const chatsСontainer = document.querySelector(".chat-container");
    const chatsContent = document.querySelector(".chats-content");

    setTimeout(() => {
      if (chatsContent) {
        chatsContent.scrollTop = chatsContent.children[0].offsetHeight;
      }
      scrollTo(0, 0);
    }, 100);

    resizeFull(tablet);
    resizeFull(tabletScroll);
    resizeFull(chatsСontainer);
  }
});
