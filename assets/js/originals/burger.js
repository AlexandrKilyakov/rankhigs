document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".mh-nav");

  menu.style.right = `-${menu.offsetWidth + 10}px`;

  if (burger) {
    removeClose();

    burger.addEventListener("click", () => {
      if (burger.classList.contains("close")) {
        removeClose();
        menu.style.right = `-${menu.offsetWidth + 10}px`;
      } else {
        addClose();
        menu.style.right = `0`;
      }
    });

    function removeClose() {
      if (burger.classList.contains("close")) {
        burger.classList.remove("close");
      }
    }

    function addClose() {
      if (!burger.classList.contains("close")) {
        burger.classList.add("close");
      }
    }
  }
});
