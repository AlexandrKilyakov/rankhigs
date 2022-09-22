document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll("label:not(for) select");

  if (selects) {
    let timer = setInterval(() => {
      if (document.querySelector(".select2")) {
        clearInterval(timer);
        selects.forEach((select) => {
          const select2 = select.parentElement.querySelector(".select2");
          const select2Rendered = select2.querySelector(
            ".select2-selection__rendered"
          );

          addSelected(select);
          select.addEventListener("change", () => {
            addSelected(select);
          });

          if (select2Rendered.title != "") {
            if (!select2.classList.contains("selected")) {
              select2.classList.add("selected");
            }
          }
        });
      }
    }, 100);
  }

  function addSelected(select) {
    if (select.selectedIndex && !select.classList.contains("selected")) {
      select.classList.add("selected");
    }
  }
});
