let isStatus = document.querySelector("h5");
let addFriend = document.getElementById("add-btn");

let flag = false;

addFriend.addEventListener("click", () => {
  if (!flag) {
    flag = true;
    addFriend.innerHTML = "Remove Friend";
    isStatus.innerText = "Friends";
    isStatus.style.color = "Green";
  } else {
    flag = false;
    addFriend.innerHTML = "Add Friend";
    isStatus.innerText = "Stranger";
    isStatus.style.color = "#999";
  }
});