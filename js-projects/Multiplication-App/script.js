const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const scoreEl = document.getElementById("score-value");
const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");

// const userAnswerEl = document.getElementById("user-value");
// const correctAnswerEl = document.getElementById("multiplication-value");

const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = score;

num1El.innerText = num1;
num2El.innerText = num2;

const correctAns = num1 * num2;

formEl.addEventListener("submit", (event) => {
  // event.preventDefault()
  // form.reset();
  // event.target.reset();
  // e.target.value = ''
  var userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

// facing problem
// userAnswerEl.innerText = userAns;
// correctAnswerEl.innerText = correctAns;

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
