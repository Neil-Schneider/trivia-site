const questionElement = document.getElementById("question");
const timerElement = document.getElementById("timer");
const answerForm = document.getElementById("answer-form");

const questions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is the largest mammal?", answer: "Blue Whale" },
  // Add more questions as needed
];

let currentQuestionIndex = 0;
let countdown;

function startTimer(duration) {
  clearInterval(countdown);
  let time = duration;
  countdown = setInterval(() => {
    timerElement.textContent = time;
    if (time <= 0) {
      clearInterval(countdown);
      nextQuestion();
    }
    time--;
  }, 1000);
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length) {
    questionElement.textContent = questions[currentQuestionIndex].question;
    startTimer(10); // Set the timer duration in seconds
    currentQuestionIndex++;
  } else {
    questionElement.textContent = "Game Over!";
    timerElement.textContent = "-";
  }
}

answerForm.addEventListener("submit", (
