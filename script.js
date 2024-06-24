const questions = [
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "Mount Everest", correct: true},
            { text: "K2", correct: false},
            { text: "Mount Kilimanjaro", correct: false},
            { text: "Mount Fuji", correct: false},
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Indian Ocean", correct: false},
            { text: "Atlantic Ocean", correct: false},
            { text: "Pacific Ocean", correct: true},
            { text: "Artcic Ocean", correct: false},
        ]
    },
    {
        question: "What is the name of the world's most famous Mona Lisa painting attributed to?",
        answers: [
            { text: "Michelangelo", correct: false},
            { text: "Leonardo da Vinci", correct: true},
            { text: "Claude Monet", correct: false},
            { text: "Vincent van Gogh", correct: false},
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Fe", correct: false},
            { text: "Cu", correct: false},
            { text: "Au", correct: true},
            { text: "Ag", correct: false},
        ]
    },
    {
        question: "On which planet in our solar system would you find the Great Red Spot?",
        answers: [
            { text: "Mars", correct: false},
            { text: "Jupiter", correct: true},
            { text: "Saturn", correct: false},
            { text: "Venus", correct: false},
        ]
    },
    {
        question: "What is the name of the famous clock tower in London?",
        answers: [
            { text: "The Flower Clock", correct: false},
            { text: "London Eye", correct: false},
            { text: "Grand Central Terminal Clock", correct: false},
            { text: "Big Ben", correct: true},
        ]
    },
    {
        question: "In which year did World War II begin?",
        answers: [
            { text: "1914", correct: false},
            { text: "1939", correct: true},
            { text: "1941", correct: false},
            { text: "1920", correct: false},
        ]
    },
    {
        question: "In Greek mythology, which god or goddess is associated with wisdom, handicraft, and warfare?",
        answers: [
            { text: "Poseidon", correct: false},
            { text: "Zeus", correct: false},
            { text: "Athena", correct: true},
            { text: "Aphrodite", correct: false},
        ]
    },
    {
        question: "How many sides does a hexagon have?",
        answers: [
            { text: "7", correct: false},
            { text: "9", correct: false},
            { text: "8", correct: false},
            { text: "6", correct: true},
        ]
    },
    {
        question: "What is the name of the world's most popular social media platform (by monthly active users)?",
        answers: [
            { text: "Facebook", correct: true},
            { text: "Twitter", correct: false},
            { text: "Instagram", correct: false},
            { text: "Tiktok", correct: false},
        ]
    },
    {
        question: "What is the main ingredient in chocolate?",
        answers: [
            { text: "Vanilla", correct: false},
            { text: "Cocoa", correct: true},
            { text: "Milk", correct: false},
            { text: "Sugar", correct: false},
        ]
    },
    {
        question: "Which of these is NOT a primary color?",
        answers: [
            { text: "Red", correct: false},
            { text: "Yellow", correct: false},
            { text: "Blue", correct: false},
            { text: "Green", correct: true},
        ]
    },
    {
        question: "What is the name of the largest active volcano in Europe?",
        answers: [
            { text: "Mount Etna", correct: true},
            { text: "Mount Vesuvius", correct: false},
            { text: "Teide", correct: false},
            { text: "Mount Elbrus", correct: false},
        ]
    },
    {
        question: "What is the largest land mammal on Earth?",
        answers: [
            { text: "Blue Whale", correct: false},
            { text: "Giraffe", correct: false},
            { text: "Sperm Whale", correct: false},
            { text: "African Elephant", correct: true},
        ]
    },
    {
        question: "What is the most popular sport in the world (by viewership)?",
        answers: [
            { text: "Basketball", correct: false},
            { text: "American Football", correct: false},
            { text: "Soccer", correct: true},
            { text: "Cricket", correct: false},
        ]
    },
    {
        question: "What is the largest internal organ in the human body?",
        answers: [
            { text: "Heart", correct: false},
            { text: "Liver", correct: true},
            { text: "Lungs", correct: false},
            { text: "Skin", correct: false},
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "Japan", correct: true},
            { text: "South Korea", correct: false},
            { text: "Thailand", correct: false},
            { text: "North Korea", correct: false},
        ]
    },
    {
        question: "What is the largest country in South America?",
        answers: [
            { text: "Argentina", correct: false},
            { text: "Colombia", correct: false},
            { text: "Peru", correct: false},
            { text: "Brazil", correct: true},
        ]
    },
    {
        question: "Which of these is a soft drink originally created by a pharmacist?",
        answers: [
            { text: "Coca-Cola", correct: true},
            { text: "Pepsi", correct: false},
            { text: "Sprite", correct: false},
            { text: "Fanta", correct: false},
        ]
    },
    {
        question: "What is the chemical element used in pencil lead?",
        answers: [
            { text: "Gold", correct: false},
            { text: "Copper", correct: false},
            { text: "Silver", correct: false},
            { text: "Graphite", correct: true},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
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
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score ++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();