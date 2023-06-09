document.addEventListener("DOMContentLoaded", () => {
  if (innerWidth <= 1067) {
    return;
  }
  const btn = document.querySelector(".login-options .btn-search");
  const headerLogin = document.querySelector(".header-for-login");

  if (headerLogin && btn) {
    btn.addEventListener("click", () => {
      headerLogin.classList.toggle("show-search");
    });
  }
});
