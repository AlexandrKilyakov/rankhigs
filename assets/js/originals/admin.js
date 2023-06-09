document.addEventListener("DOMContentLoaded", () => {
  const codes = document.querySelectorAll(".code");

  if (codes) {
    codes.forEach((code) => {
      const text = code.querySelector("div[contenteditable]").children[0];
      const lines = code.querySelector(".lines");

      if (text && lines) {
        lines.setAttribute("data-line", 1);
        lines.innerHTML = `<span>1</span>`;
        let n = 0;

        setInput();

        text.addEventListener("input", () => {
          setInput();
        });

        function setInput() {
          let line = text.childElementCount;

          if (lines.dataset.line != line) {
            n = Number(lines.dataset.line);
            if (n < line) {
              lines.innerHTML = `<span>1</span>`;
              for (let i = 2; i <= line; i++) {
                lines.innerHTML += `<span>${i}</span>`;
              }
            } else {
              for (let i = 0; i < n - line; i++) {
                lines.children[lines.childElementCount - 1].remove();
              }
            }
            lines.dataset.line = line;
          }
          if (!line) {
            lines.innerHTML = `<span>1</span>`;
          }
        }
      }
    });
  }
});
