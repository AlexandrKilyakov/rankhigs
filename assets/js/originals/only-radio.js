document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll(".only-radio");

  if (radios) {
    radios.forEach((radio) => {
      let checkbox = radio.querySelectorAll('input[type="checkbox"]');

      checkbox.forEach((item) => {
        item.addEventListener("change", () => {
          if (item.checked) {
            checkbox.forEach((uncheck) => {
              uncheck.checked = false;
            });
            item.checked = true;
          }
        });
      });
    });
  }
});
