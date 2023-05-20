const WORDS = [
    "direction",
    "collect",
    "seed",
    "expose",
    "bean",
    "chop",
    "page",
    "bridge",
    "basis",
    "variant",
    "public",
    "gallery",
    "implication",
    "feather",
    "hit",
    "gun",
    "fireplace",
    "guest",
    "determine",
    "ride",
    "spray",
    "pepper",
    "center",
    "think",
    "agency",
    "sum",
    "bitter",
    "try",
    "spine",
    "astonishing",
    "banquet",
    "sting",
    "result",
    "costume",
    "situation",
    "us",
    "stress",
    "concede",
    "facade",
    "cheap",
    "bloody",
    "tropical",
    "garage",
    "bathtub",
    "monkey",
    "president",
    "prince",
    "retired",
    "communist",
    "looting"
];

const next = document.getElementById("next");
const input = document.getElementById("user-input");
const score = document.getElementById("score");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let points = 0;
let chosenWord;
let seconds = 10;
let timerInterval;

function format(number) {
    return number.toString().padStart(2, '0');
}

const updateWord = () => {
    chosenWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    next.innerText = `${chosenWord}`;
};

const resetGame = () => {
    clearInterval(timerInterval);
    points = 0;
    timer.classList.remove('timeout')
    timer.innerText = `⏳ : ${format(seconds)}'`;
    score.innerText = `🎯 : ${format(points)}`;
    seconds = 10;
    input.value = "";
    input.disabled = false;
    updateWord();
    startTimer();
};

const handleInput = () => {
    if (input.value === chosenWord) {
        points += 1;
        input.value = "";
        seconds = 10;
        updateWord();
        timer.innerText = `⏳ : ${format(seconds)}'`;
        score.innerText = `🎯 : ${format(points)}`;
    }
};

const startTimer = () => {
    timerInterval = setInterval(() => {
        seconds--;
        if (seconds <= 0) {
            clearInterval(timerInterval);
            input.disabled = true;
            timer.classList.add('timeout')
        }
        timer.innerText = `⏳ : ${format(seconds)}'`;
    }, 1000);
};

reset.addEventListener("click", resetGame);
input.addEventListener("change", handleInput);

updateWord();
startTimer();
