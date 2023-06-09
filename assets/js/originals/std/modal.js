import * as def from "../modules/functions.js";

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelectorAll(".modal");
  const createModalEmpls = document.querySelectorAll(".create-carts-elements");
  const modalEmpls = document.querySelectorAll(".result-carts-elements");

  if (modal) {
    modal.forEach((element) => {
      element.addEventListener("click", (e) => {
        if (e.target) {
          if (
            e.target.classList.contains("modal") ||
            e.target.classList.contains("btn-close-modal") ||
            e.target.classList.contains("close-modal")
          ) {
            def.hide(element);
          }
        }
      });
    });
  }

  /* <a href="#" class="rie-cart-link" target="_blank"></a> */

  if (createModalEmpls) {
    createModalEmpls.forEach((cme, i) => {
      let modalCME = cme.parentElement.parentElement;
      const btmCME = modalCME.querySelector("[data-choice]");

      cme.addEventListener("click", (e) => {
        let el = e.target;
        if (el) {
          if (el.type == "checkbox") {
            if (el.checked) {
              el.setAttribute("data-idcart", modalEmpls[i].childElementCount);

              let doc = document.createElement("div");
              let doc2 = document.createElement("div");
              doc.classList.add("rie-cart");
              doc2.classList.add("rie-info");
              doc.setAttribute("data-idel", el.dataset["idcart"]);

              if (el.parentElement.querySelector(".ava img")) {
                doc2.innerHTML += `<div class="ava">
                  <img src="${
                    el.parentElement.querySelector(".ava img").src
                  }" alt="">
                </div>`;
              }
              doc2.innerHTML += `<p class="name">${
                el.parentElement.querySelector(".employee-box").innerText
              }</p>`;
              doc.appendChild(doc2);
              doc.innerHTML += '<button class="btn-close">✖</button>';
              modalEmpls[i].appendChild(doc);
            } else {
              cme.parentElement.parentElement
                .querySelector(`[data-idel="${el.dataset["idcart"]}"]`)
                .remove();
              el.removeAttribute("data-idcart");
            }

            let elements = modalCME.querySelectorAll(".rie-cart");
            if (elements.length) {
              btmCME.removeAttribute("disabled");
              if (elements.length == 1) {
                btmCME.innerHTML = "Выбрать сотрудника";
              } else if (elements.length > 1) {
                btmCME.innerHTML = "Выбрать сотрудник";
                btmCME.innerHTML +=
                  elements.length == 1 ? "а" : `ов (${elements.length})`;
              }
            } else {
              btmCME.setAttribute("disabled", true);
            }
          }
        }
      });
    });
  }

  if (modalEmpls) {
    modalEmpls.forEach((modalEmpl) => {
      let modalCME = modalEmpl.parentElement;
      const btmCME = modalCME.querySelector("[data-choice]");
      modalEmpl.addEventListener("click", (e) => {
        if (e.target) {
          if (e.target.classList.contains("btn-close")) {
            let cart = modalEmpl.parentElement.querySelector(
              `[data-idcart="${e.target.parentElement.dataset["idel"]}"]`
            );
            cart.removeAttribute("data-idcart");
            cart.checked = false;
            e.target.parentElement.remove();
          }
        }

        let elements = modalCME.querySelectorAll(".rie-cart");
        if (elements.length) {
          btmCME.removeAttribute("disabled");
          if (elements.length == 1) {
            btmCME.innerHTML = "Выбрать сотрудника";
          } else if (elements.length > 1) {
            btmCME.innerHTML = "Выбрать сотрудник";
            btmCME.innerHTML +=
              elements.length == 1 ? "а" : `ов (${elements.length})`;
          }
        } else {
          btmCME.setAttribute("disabled", true);
        }
      });
    });
  }
});
