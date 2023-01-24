function getHeight(el) {
  if (innerWidth < 467) {
    const login = document.querySelector(".login-options");
    if (login) {
      return innerHeight - el.offsetTop - login.offsetHeight;
    }
  }
  return innerHeight - el.offsetTop;
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
  const removeGlobalScroll = document.querySelector(".remove-global-scroll");

  resizeFull(menuBar);

  if (removeGlobalScroll) {
    scrollTo(0, 0);
    const tablet = document.querySelector(".tablet");
    // const canvasResult = document.querySelector(".canvas-result");
    const chatsСontainer = document.querySelector(".chat-container");
    const chatsContent = document.querySelector(".chats-content");

    setTimeout(() => {
      if (chatsContent) {
        chatsContent.scrollTop = chatsContent.children[0].offsetHeight;
      }
    }, 100);

    resizeFull(tablet);
    resizeFull(chatsСontainer);
  }
});
