document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".mh-nav");

  if (burger && menu) {
    removeClose();

    burger.addEventListener("click", () => {
      if (burger.classList.contains("close")) {
        removeClose();
        menu.style.transform = "";
      } else {
        addClose();
        menu.style.transform = "translateX(0)";
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
