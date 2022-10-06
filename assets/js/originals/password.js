document.addEventListener("DOMContentLoaded", function () {
  const password = document.querySelectorAll('input[type="password"]');

  if (password) {
    const eye = document.createElement("button");
    eye.classList.add("password-eye");
    eye.type = "button";
    eye.innerHTML = `<span class="icon-eye eye-hide hide"><svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z" stroke="#C3C3C3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z" stroke="#C3C3C3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></span>`;
    eye.innerHTML += `<span class="icon-eye eye-show"><svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.257 7.962C20.731 8.582 20.731 9.419 20.257 10.038C18.764 11.987 15.182 16 11 16C6.81801 16 3.23601 11.987 1.74301 10.038C1.51239 9.74113 1.38721 9.37592 1.38721 9C1.38721 8.62408 1.51239 8.25887 1.74301 7.962C3.23601 6.013 6.81801 2 11 2C15.182 2 18.764 6.013 20.257 7.962V7.962Z" stroke="#C3C3C3" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="2.35355" y1="0.646447" x2="19.3241" y2="17.617" stroke="#C3C3C3"/>
    <path d="M8.87868 6.87868C8.31607 7.44129 8 8.20435 8 9C8 9.79565 8.31607 10.5587 8.87868 11.1213C9.44129 11.6839 10.2044 12 11 12C11.7956 12 12.5587 11.6839 13.1213 11.1213" stroke="#C3C3C3"/>
    </svg></span>`;

    setTimeout(() => {
      password.forEach((item) => {
        eye.style.height = `${item.offsetHeight}px`;

        item.parentElement.innerHTML += eye.outerHTML;
      });
    }, 10);

    setTimeout(() => {
      document.querySelectorAll(".password-eye").forEach((btn) => {
        btn.addEventListener("click", () => {
          const hide = btn.querySelector(".eye-hide");
          const show = btn.querySelector(".eye-show");
          const input = btn.parentElement.querySelector("input");

          if (hide.classList.contains("hide")) {
            hide.classList.remove("hide");
            show.classList.add("hide");
            input.type = "text";
          } else if (show.classList.contains("hide")) {
            show.classList.remove("hide");
            hide.classList.add("hide");
            input.type = "password";
          }
        });
      });
    }, 3000);
  }
});
