document.addEventListener("click", function (e) {
  let btn = e.target.classList.contains("add-more")
    ? e.target
    : e.target.parentElement.classList.contains("add-more")
    ? e.target.parentElement
    : e.target.parentElement.parentElement.classList.contains("add-more")
    ? e.target.parentElement.parentElement
    : false;

  if (btn) {
    let btnClose = document.createElement("button");
    btnClose.classList.add("btn-close");
    btnClose.classList.add("btn-close-group");

    let element = btn.previousElementSibling.cloneNode(true);

    if (element.classList.contains("hide")) {
      element.classList.remove("hide");
    }

    if (element.querySelector("[name]")) {
      element.querySelectorAll("[name]").forEach((el) => {
        el.name = stepAttr(el);
      });
    }

    if (element.querySelector("[id]")) {
      element.querySelectorAll("[id]").forEach((el) => {
        el.id = stepAttr(el);
      });
    }

    if (element.querySelector("[value]")) {
      element.querySelectorAll("[value]").forEach((el) => {
        el.value = "";
      });
    }

    if (!element.querySelector(".btn-close-group")) {
      element.insertBefore(btnClose, parent.firstElementChild);
    }

    element.querySelectorAll(".btn-close-group").forEach((close) => {
      close.addEventListener("click", () => {
        close.parentElement.remove();
      });
    });

    if (element.querySelector("label:not(for) select")) {
      element.querySelectorAll("label:not(for) select").forEach((select) => {
        if (select.classList.contains("selected")) {
          select.classList.remove("selected");
        }
        select.addEventListener("change", () => {
          if (select.selectedIndex && !select.classList.contains("selected")) {
            select.classList.add("selected");
          }
        });
      });
    }

    btn.parentElement.insertBefore(element, btn);

    function stepAttr(element) {
      let arr = element.name.split("-");
      let name = "";
      let num = "";

      if (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
          name += `${arr[i]}-`;
        }
        num = Number(arr[arr.length - 1]) + 1;
      } else if (arr.length == 1) {
        name = `${arr[0]}-`;
        num = 1;
      }

      return `${name}${num}`;
    }
  }
});
