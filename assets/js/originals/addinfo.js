document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mouseover", (e) => {
    if (e.target.dataset.info) {
      hideAddInfo();
      e.target.classList.add("addhover");
    }
  });
  document.addEventListener("mouseout", (e) => {
    if (!e.target.closest("[data-info='clue']")) {
      hideAddInfo();
    }
  });

  function hideAddInfo() {
    document.querySelectorAll("[data-info='clue']").forEach((el) => {
      if (el.classList.contains("addhover")) {
        el.classList.remove("addhover");
      }
    });
  }
});
