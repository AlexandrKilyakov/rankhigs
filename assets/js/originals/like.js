document.addEventListener("DOMContentLoaded", () => {
  const btnLike = document.querySelectorAll(".btn-like");
  const active = "like";

  if (btnLike) {
    btnLike.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.classList.contains(active)) {
          btn.classList.remove(active);
        } else {
          btn.classList.add(active);
        }
      });
    });
  }
});
