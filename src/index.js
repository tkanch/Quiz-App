const quizList = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Home Tool Markup Language",
    c: "Hyperlinks and Text Markup Language",
    d: "None of the above",
    ans: "ans1"
  },
  {
    question: "What does CSS stand for?",
    a: "Colorful Style Sheets",
    b: "Computer Style Sheets",
    c: "Creative Style Sheets",
    d: "Cascading Style Sheets",
    ans: "ans4"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "&lt;js&gt;",
    b: "&lt;script&gt;",
    c: "&lt;javascript&gt;",
    d: "&lt;scripting&gt;",
    ans: "ans2"
  },
  {
    question: "PHP server scripts are surrounded by delimiters, which?",
    a: "&lt;script&gt;...&lt;/script&gt;",
    b: "&lt;?php&gt;...&lt;/?&gt;",
    c: "&lt;?php...?&gt;",
    d: "&lt;&&gt;...&lt;/&&gt;",
    ans: "ans3"
  }
];

//defining variables
let count = 0;
let score = 0;

//getting elements
const quest = document.querySelector("h2.question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const submitBtn = document.querySelector("button#submit");
const scoreDiv = document.getElementById("showScore");
const inputs = document.querySelectorAll("input.answer");

loadQuestion();
//defing functions loadQusetion and checknswer
function loadQuestion() {
  quest.innerHTML = quizList[count].question;
  option1.innerHTML = quizList[count].a;
  option2.innerHTML = quizList[count].b;
  option3.innerHTML = quizList[count].c;
  option4.innerHTML = quizList[count].d;
}

const checkAnswer = () => {
  let answer;
  inputs.forEach((input) => {
    if (input.checked) {
      answer = input.id;
    }
  });
  return answer;
};

//calling function loadQuestion()
loadQuestion();

submitBtn.addEventListener("click", () => {
  let checkedAns = checkAnswer();

  if (count < quizList.length - 1) {
    if (checkedAns === quizList[count].ans) {
      score++;
    }
    count++;
    loadQuestion();
  } else {
    scoreDiv.classList.remove("score");

    scoreDiv.innerHTML =
      score < 4
        ? `<h2> Your score is ${score}/${quizList.length}</h2>
    <button class="btn" onclick="location.reload()">Play Again !</button> `
        : `<h2> Your score is ${score}/${quizList.length}</h2>
    <p>Congatulations , you got all correct !</p>`;
  }
});
