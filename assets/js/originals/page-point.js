document.addEventListener("DOMContentLoaded", () => {
  const checkPoints = document.querySelectorAll(`*[class*='check-point-']`);
  const menuBar = document.querySelector(".menu-bar");
  const active = "pli-active";

  if (checkPoints) {
    const points = [];
    let n = 0;
    let save = false;

    checkPoints.forEach((checkPoint) => {
      n = 0;
      save = false;
      checkPoint.className.split(" ").forEach((cl) => {
        if (cl.includes("check-point-")) {
          n = cl.split("-")[2];
        }
      });

      save = document.querySelector(`.save-point-${n}`);

      if (save) {
        points.push(save.offsetTop - innerHeight / 3);

        checkPoint.addEventListener("click", (e) => {
          checkPoint.className.split(" ").forEach((cl) => {
            if (cl.includes("check-point-")) {
              e.preventDefault();
              scrollTo(0, points[Number(cl.split("-")[2]) - 1] - points[0]);
            }
          });
        });
      }
    });

    document.addEventListener("scroll", () => {
      for (let i = 0; i < points.length; i++) {
        if (points[i + 1]) {
          if (scrollY >= points[i] && scrollY <= points[i + 1]) {
            getPoints(i);
          }
        } else {
          if (scrollY >= points[i]) {
            getPoints(i);
          }
        }
      }
    });
  }

  function getPoints(i) {
    if (menuBar.querySelector(`.${active}`)) {
      menuBar.querySelector(`.${active}`).classList.remove(active);
    }
    checkPoints[i].classList.add(active);
  }
});
