const questions = [
    {
        question: "What video-game series is the character Sub-Zero from? ",
        answers: [
            {text: "Mortal Kombat", correct: true},
            {text: "Mario Kart", correct: false},
            {text: "Goldeneye", correct: false},
            {text: "The Legend of Zelda", correct: false},
        ]
    },
    {
        question: "What is the highest level a player can reach in Pacman?",
        answers: [
            {text: "120", correct: false},
            {text: "315", correct: false},
            {text: "54", correct: false},
            {text: "256", correct: true},
        ]
    },
    {
        question: "What is the first console game that allowed players to save their progress? ",
        answers: [
            {text: "Mortal Kombat", correct: false},
            {text: "Legend of Zelda", correct: true},
            {text: "Goldeneye", correct: false},
            {text: "Super Mario Bros", correct: false},
        ]
    },
    {
        question: "How many different block shapes are there in Tetris?",
        answers: [
            {text: "5", correct: false},
            {text: "7", correct: true},
            {text: "9", correct: false},
            {text: "4", correct: false},
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz()