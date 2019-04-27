const like = document.getElementById("<3");
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const pause = document.getElementById("pause");
const counter = document.getElementById("counter");
const commentForm = document.getElementById("comment-form");
const likes = document.querySelector(".likes");
let onCount = false;
let currentItem = null;
let currentLike = null;

document.addEventListener("DOMContentLoaded", () => {
  toggleCounter();
  initCounter();
});

pause.addEventListener("click", e => {
  e.target.innerText = e.target.innerText == "pause" ? "resume" : "pause";
  toggleCounter();
});

minus.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText, 10) - 1;
});

plus.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText, 10) + 1;
});

like.addEventListener("click", () => {
  if (parseInt(counter.innerText, 10) == currentItem) {
    currentLike++;
    likes.children[0].innerText = `${currentItem} has been liked ${currentLike} times`;
  } else {
    currentItem = parseInt(counter.innerText, 10);
    currentLike = 1;
    let newLike = document.createElement("li");
    newLike.innerText = `${currentItem} has been liked 1 time`;
    likes.prepend(newLike);
  }
});

commentForm.addEventListener("submit", e => {
  e.preventDefault();
  let comment = document.createElement("p");
  comment.innerText = e.target.magic.value;
  document.getElementById("list").appendChild(comment);
  commentForm.reset();
});

toggleCounter = () => {
  onCount = !onCount;
};

initCounter = () => {
  setInterval(() => {
    if (onCount) {
      counter.innerText = parseInt(counter.innerText, 10) + 1;
    }
  }, 1000);
};
