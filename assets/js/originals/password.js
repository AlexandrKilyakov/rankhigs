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
    eye.innerHTML += `<span class="icon-eye eye-show"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z" stroke="#C3C3C3" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="3.35355" y1="3.64645" x2="20.3241" y2="20.617" stroke="#C3C3C3"/>
        <path d="M9.87868 9.87868C9.31607 10.4413 9 11.2043 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213" stroke="#C3C3C3"/>
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
