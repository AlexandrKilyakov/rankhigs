document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn--lupa");

  if (btn) {
    btn.addEventListener("click", showModal);
  }
});

function showModal() {
  const modal = document.createElement("div");
  const imgSrc = this.parentElement.style.backgroundImage
    .slice(4, -1)
    .replace(/"/g, "");
  modal.className = "modal modal--photo";
  modal.innerHTML = `
      <img src="${imgSrc}">
      <button type="button" class="btn-close">&#10006;</button>
    `;
  document.body.appendChild(modal);

  // Add event listener to close modal when "Close Modal" button is clicked
  modal.addEventListener("click", (e) => {
    if (e.target) {
      if (
        e.target.classList.contains("modal") ||
        e.target.classList.contains("btn-close")
      ) {
        modal.remove();
      }
    }
  });
}
