import * as def from "./modules/functions.js";

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
    for (let i = 0; i < createModalEmpls.length; i++) {
      createModalEmpls[i].addEventListener("click", (e) => {
        if (e.target) {
          if (e.target.type == "checkbox") {
            if (e.target.checked) {
              e.target.setAttribute(
                "data-idcart",
                modalEmpls[i].childElementCount
              );

              let doc = document.createElement("div");
              let doc2 = document.createElement("div");
              doc.classList.add("rie-cart");
              doc2.classList.add("rie-info");
              doc.setAttribute("data-idel", e.target.dataset["idcart"]);

              if (e.target.parentElement.querySelector(".ava img")) {
                doc2.innerHTML += `<div class="ava">
                  <img src="${
                    e.target.parentElement.querySelector(".ava img").src
                  }" alt="">
                </div>`;
              }
              doc2.innerHTML += `<p class="name">${
                e.target.parentElement.querySelector(".employee-box").innerText
              }</p>`;
              doc.appendChild(doc2);
              doc.innerHTML += '<button class="btn-close">✖</button>';
              modalEmpls[i].appendChild(doc);
            } else {
              createModalEmpls[i].parentElement.parentElement
                .querySelector(`[data-idel="${e.target.dataset["idcart"]}"]`)
                .remove();
              e.target.removeAttribute("data-idcart");
            }
          }
        }
      });
    }
  }

  if (modalEmpls) {
    modalEmpls.forEach((modalEmpl) => {
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
      });
    });
  }
});
