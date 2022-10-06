export function hide(el) {
  try {
    if (!el.classList.contains("hide")) {
      el.classList.add("hide");
    }
  } catch (error) {
    for (let i = 0; i < el.length; i++) {
      if (!el[i].classList.contains("hide")) {
        el[i].classList.add("hide");
      }
    }
  }
}

export function show(el) {
  try {
    if (el.classList.contains("hide")) {
      el.classList.remove("hide");
    }
  } catch (error) {
    for (let i = 0; i < el.length; i++) {
      if (el[i].classList.contains("hide")) {
        el[i].classList.remove("hide");
      }
    }
  }
}

export function getCss(el, style) {
  return window.getComputedStyle(el, null).getPropertyValue(style);
}

export function getNumber(el) {
  return parseInt(el.match(/\d+/));
}
