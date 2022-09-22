document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll("label:not(for) select");

  if (selects) {
    selects.forEach((select) => {
      addSelected(select);
      select.addEventListener("change", () => {
        addSelected(select);
      });
    });
  }

  function addSelected(select) {
    if (select.selectedIndex && !select.classList.contains("selected")) {
      select.classList.add("selected");
    }
  }
});
