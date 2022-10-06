document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector(
    '.need-to-get-consent input[type="checkbox"]'
  );
  const btn = document.querySelector(".allow-after-consent");

  if (checkbox && btn) {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked && btn.classList.contains("disabled")) {
        btn.classList.remove("disabled");
      } else if (!(checkbox.checked && btn.classList.contains("disabled"))) {
        btn.classList.add("disabled");
      }
    });
  }
});
