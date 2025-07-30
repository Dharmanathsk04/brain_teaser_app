const teasers = [
  {
    question: "I speak without a mouth and hear without ears. What am I?",
    answer: "An echo"
  },
  {
    question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
    answer: "The letter M"
  },
  {
    question: "I have keys but no locks. I have space but no room. You can enter but can't go outside. What am I?",
    answer: "A keyboard"
  },
  {
    question: "The more you take, the more you leave behind. What are they?",
    answer: "Footsteps"
  },
  {
    question: "What has to be broken before you can use it?",
    answer: "An egg"
  }
];

let currentTeaser = {};
let score = 0;

function newTeaser() {
  const randomIndex = Math.floor(Math.random() * teasers.length);
  currentTeaser = teasers[randomIndex];
  document.getElementById('teaser').textContent = currentTeaser.question;
  document.getElementById('answer').textContent = currentTeaser.answer;
  document.getElementById('answer').classList.add("hidden");
  score++;
  document.getElementById("score").textContent = score;
}

function showAnswer() {
  document.getElementById('answer').classList.remove("hidden");
}
