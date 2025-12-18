let post = document.getElementById("image");
let love = document.getElementById("big-heart");
let smallLove = document.getElementById("small-heart");

post.addEventListener("dblclick", () => {
  smallLove.style.color = "red";
  love.style.transform = "translate(-50%, -50%) scale(1)";

  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000);
});

smallLove.addEventListener("click", () => {
  if (smallLove.style.color === "red") {
    smallLove.style.color = "white";
  } else {
    smallLove.style.color = "red";
  }
});