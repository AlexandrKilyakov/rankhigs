document.addEventListener("click", function (e) {
  let btn = e.target.closest("[data-click]");
  let btnCloseGroup = e.target.closest(".btn-close-group");

  if (btnCloseGroup) {
    btnCloseGroup.parentElement.remove();
  }

  if (btn) {
    let btnClose = document.createElement("button");
    btnClose.classList.add("btn-close");
    btnClose.classList.add("btn-close-group");
    btnClose.type = "button";

    switch (btn.dataset.click) {
      case "more":
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

        if (element.querySelector("label:not(for) select")) {
          element
            .querySelectorAll("label:not(for) select")
            .forEach((select) => {
              if (select.classList.contains("selected")) {
                select.classList.remove("selected");
              }
              select.addEventListener("change", () => {
                if (
                  select.selectedIndex &&
                  !select.classList.contains("selected")
                ) {
                  select.classList.add("selected");
                }
              });
            });
        }

        btn.parentElement.insertBefore(element, btn);
        break;

      case "answer":
        let btnRadio =
          btn.parentElement.parentElement.querySelectorAll(".radio-btn");
        let variant = btn.previousElementSibling.querySelector("input");
        let type = "radio";

        if (btnRadio.length) {
          btnRadio.forEach((el) => {
            let input = el.querySelector("input");

            if (input && input.checked) {
              type = input.value;
            }
          });
        }

        if (!variant.validity.valid) {
          return false;
        }
        let answer = document.createElement("label");
        answer.classList.add(type);
        answer.classList.add("var-answer");
        answer.innerHTML = `
                            <input type="${type}" name="agreement" />
                            <span class="checktext">${variant.value}</span>`;
        answer.appendChild(btnClose);

        variant.value = "";
        variant.required = false;

        btn.parentElement.insertBefore(answer, btn.previousElementSibling);
        break;

      case "var-answer":
        let box = btn.closest(".create-option");

        if (!box) {
          return false;
        }
        let varAnswer = box.querySelectorAll(".var-answer");

        varAnswer.forEach((el) => {
          let input = el.querySelector("input");

          el.className = `var-answer ${btn.value}`;

          if (input) {
            input.type = btn.value;
          }
        });
        break;

      case "reform":
        let form = btn.closest("form");

        if (form) {
          let fors = form.querySelectorAll("[class*='for-']");

          if (fors) {
            fors.forEach((el) => {
              if (el.classList.contains("hide")) {
                el.remove();
              }
            });
          }
        }
        break;

      default:
        break;
    }

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
