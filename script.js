const quizData = [
    {
        question: "اولین خودرو در چه سالی ساخته شد؟",
        options: ["1769", "1886", "1901", "1920"],
        answer: "1886"
    },
    {
        question: "کدام شرکت اولین خودرو هیبریدی را تولید کرد؟",
        options: ["تویوتا", "هوندا", "فورد", "مرسدس بنز"],
        answer: "تویوتا"
    },
    {
        question: "کدام کشور بیشترین تولید خودرو را دارد؟",
        options: ["آلمان", "آمریکا", "چین", "ژاپن"],
        answer: "چین"
    },
    {
        question: "لوگوی شرکت فراری چه نمادی دارد؟",
        options: ["اسب", "شیر", "عقاب", "مار"],
        answer: "اسب"
    },
    {
        question: "کدام خودرو به عنوان سریع‌ترین خودروی جهان در سال 2023 شناخته شد؟",
        options: ["بوگاتی شیرون سوپراسپرت", "هنسی ونوم F5", "کونیگزگ جسکو", "ریماک نورا"],
        answer: "ریماک نورا"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";
    
    if (currentQuestion < quizData.length) {
        let questionData = quizData[currentQuestion];
        let questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerText = questionData.question;
        quizContainer.appendChild(questionElement);
        
        questionData.options.forEach(option => {
            let button = document.createElement("button");
            button.classList.add("option");
            button.innerText = option;
            button.onclick = () => checkAnswer(option);
            quizContainer.appendChild(button);
        });
    } else {
        document.getElementById("result").innerText = `آزمون تمام شد! امتیاز شما: ${score} از ${quizData.length}`;
    }
}

function checkAnswer(selectedOption) {
    if (selectedOption === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

loadQuestion();
// clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();