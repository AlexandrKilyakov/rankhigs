document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector(
    '.need-to-get-consent input[type="checkbox"]'
  );
  const btn = document.querySelector(".allow-after-consent");

  if (checkbox && btn) {
    btn.addEventListener("click", (e) => {
      if (btn.classList.contains("disabled")) {
        e.preventDefault();
        alert(
          "Вы не дали своё согласие на обработку своих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152‑ФЗ"
        );
      }
    });
    checkbox.addEventListener("change", () => {
      if (checkbox.checked && btn.classList.contains("disabled")) {
        btn.classList.remove("disabled");
      } else if (!(checkbox.checked && btn.classList.contains("disabled"))) {
        btn.classList.add("disabled");
      }
    });
  }
});
