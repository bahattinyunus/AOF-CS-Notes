const questions = [
    {
        question: "C# dilinde bir butona tıklanma olayını temsil eden 'event' hangisidir?",
        answers: [
            { text: "OnPress", correct: false },
            { text: "Click", correct: true },
            { text: "Hover", correct: false },
            { text: "Select", correct: false }
        ]
    },
    {
        question: "SQL'de veritabanından veri çekmek için kullanılan komut hangisidir?",
        answers: [
            { text: "INSERT", correct: false },
            { text: "UPDATE", correct: false },
            { text: "SELECT", correct: true },
            { text: "DELETE", correct: false }
        ]
    },
    {
        question: "OSI Modelinin 3. katmanı (Network Layer) hangi cihazla ilişkilidir?",
        answers: [
            { text: "Hub", correct: false },
            { text: "Switch", correct: false },
            { text: "Router", correct: true },
            { text: "Repeater", correct: false }
        ]
    },
    {
        question: "Aşağıdakilerden hangisi bir 'Input' (Giriş) birimidir?",
        answers: [
            { text: "Yazıcı (Printer)", correct: false },
            { text: "Hoparlör", correct: false },
            { text: "Klavye", correct: true },
            { text: "Monitör", correct: false }
        ]
    },
    {
        question: "Windows'ta yerel IP adresini öğrenmek için kullanılan CMD komutu nedir?",
        answers: [
            { text: "ls", correct: false },
            { text: "ifconfig", correct: false },
            { text: "ping", correct: false },
            { text: "ipconfig", correct: true }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const quizContainer = document.getElementById('quiz-container');
const viewScore = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    scoreContainer.classList.add('hide');
    quizContainer.classList.remove('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    resetState();
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        button.disabled = true; 
    });
    
    if(correct) score++;

    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        showScore();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showScore() {
    quizContainer.classList.add('hide');
    scoreContainer.classList.remove('hide');
    viewScore.innerText = `Puanınız: ${score} / ${questions.length}`;
}

document.getElementById('restart-btn').addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
});

startQuiz();
