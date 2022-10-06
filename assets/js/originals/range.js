document.addEventListener("DOMContentLoaded", () => {
  const rangeContainer = document.querySelectorAll(".range-container");

  if (rangeContainer) {
    rangeContainer.forEach((container) => {
      const min = container.querySelector('input[type="range"]');
      const max = container.querySelectorAll('input[type="range"]')[1];
      const minValue = container.parentElement.querySelector("input.min");
      const maxValue = container.parentElement.querySelector("input.max");
      const progres = container.querySelector(".range-color");

      minValue.value = min.value;
      maxValue.value = max.value;

      minValue.max = min.max;
      minValue.min = min.min;
      maxValue.max = max.max;
      maxValue.max = max.max;
      maxValue.min = max.min;

      rangeColor(min, max, progres);

      min.addEventListener("input", () => {
        if (Number(min.value) <= Number(max.value)) {
          rangeColor(min, max, progres);
          minValue.value = min.value;
        } else {
          min.value = max.value;
        }
      });

      max.addEventListener("input", () => {
        if (Number(min.value) <= Number(max.value)) {
          rangeColor(min, max, progres);
          maxValue.value = max.value;
        } else {
          max.value = min.value;
        }
      });

      minValue.addEventListener("input", () => {
        if (Number(minValue.value) <= Number(max.value)) {
          min.value = minValue.value;
          rangeColor(min, max, progres);
        } else {
          minValue.value = max.value;
        }
      });

      maxValue.addEventListener("input", () => {
        if (Number(min.value) <= Number(maxValue.value)) {
          max.value = maxValue.value;
          rangeColor(min, max, progres);
        } else {
          maxValue.value = min.value;
        }
      });
    });
  }
});

function rangeColor(min, max, progres) {
  progres.style.width = `${((max.value - min.value) / max.max) * 100}%`;
  progres.style.left = `${(min.value / max.max) * 100}%`;
}
