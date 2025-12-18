let elems = document.querySelectorAll(".elem");

elems.forEach((elem) => {
  let elemImage = elem.querySelector("img");

  elem.addEventListener("mousemove", (dets) => {
    elemImage.style.left = dets.x + "px";
  });

  elem.addEventListener("mouseenter", () => {
    elemImage.style.opacity = 1;
  });

  elem.addEventListener("mouseleave", () => {
    elemImage.style.opacity = 0;
  });
});
