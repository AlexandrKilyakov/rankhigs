document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    const selects = document.querySelectorAll("select[data-label-animated]");

    if (selects) {
      selects.forEach((select) => {
        addSelected(select);
        select.addEventListener("change", () => {
          addSelected(select);
        });
      });
    }
  }, 100);

  function addSelected(select) {
    if (select.value != "") {
      select.classList.toggle("selected");
    } else if (select.classList.contains("selected")) {
      select.classList.remove("selected");
    }
  }
});
