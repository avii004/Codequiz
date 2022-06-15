// References for HTML
// HighScore and Timer - links to top of the screen
let viewHighScore = document.getElementById('view-high-score');
let countdownTimer = document.getElementById('countdown-timer');
let timeLeft = document.getElementById('time-left');
let timesUp = document.getElementById('times-up');

// Start Section - links to start section and the "Start Quiz" button
let startSection = document.getElementById('start-section');
let startBtn = document.getElementById('start-button');

// Quiz Section - links to the quiz and buttons
let quizSection = document.getElementById('quiz-section');
let quizQuestion = document.getElementById('quiz-question');
// Links to button elements
let choiceA = document.getElementById('btn-0');
let choiceB = document.getElementById('btn-1');
let choiceC = document.getElementById('btn-2');
let choiceD = document.getElementById('btn-3');

let answerCheck = document.getElementById('answer-check');

// Score Section - links to final score, player initials input, and sumbit button
let scoreSection = document.getElementById('score-section');
let finalScore = document.getElementById('final-score');
let playerInitials = document.getElementById('player-initials');
let playerInitialsBtn = document.getElementById('player-initials-btn');

// High Score Section - links to highscore with a button to go back to start and clear highscore
let highScoreSection = document.getElementById('high-score-section');
let listOfHighScores = document.getElementById('list-of-high-scores');
let goBackBtn = document.getElementById('go-back-btn');
let clearHighScoreBtn = document.getElementById('clear-high-score-btn');

 // Set the questions of object
const questions = [
    {
        question: "JavaScript is a ___ -side programming language.",
        choices:["A.Client", "B.Server", "C.Both", "D.None Of The Above"],
        answer: "c.Both"
    },
    {
        question: "Method prompt() contain how many number of parameters."
        choices:["A.One", "B.Two", "C.Three", "D.Four"]
        answer: "B.Two"
    },
    {
        question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?"
        choices:["A.if(x 2)", "B.if(x = 2)", "C.if(x == 2)", "D.if(x != 2 )"]
        answer: "C.if(x == 2)"
    },
    {
        question: "A Function Associated With An object is Called:"
        choices:["A.Function", "B.Method", "C.Link", "D.None Of The Above"]
        answer: "B.Method"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?"
        choices:["A.Js", "B.Java", "C.JS", "D.<script>"]
        answer: "D.<script>"
    },
    {
        question: "Where is the correct place to insert a JavaScript?"
        choices:["A.The <head> section", "B.The <body> section", "C.Both the <head> section and the <body> section are correct"]
        answer: "C.Both the <head> section and the <body> section are correct"
    },
    {
        question: "Is JavaScript case-sensitive?"
        choices:["A.No", "B.Yes"]
        answer: "B.Yes"
    },
    {
        question: "Which operator is used to assign a value to a variable?"
        choices:["A.+", "B.=", "C.*", "D./"]
        answer: "B.="
    },
    {
        question: "JavaScript is the same as Java."
        choices:["A.True", "B.False"]
        answer: "B.False"
    },
    {
        question: "How to insert a comment that has more than one line?"
        choices:["A./*This comment has more than one line*/ ", "B.//This COmment Has More Then ONe Line//", "C.//This comment has more then one line!*//"]
        answer: "A./*This comment has more than one line*/"
    },
    {
        question: "The external JavaScript file must contain the <script> tag."
        choices:["A.False", "B.True"]
        answer: "A.False"
    },
    {
        question: "How do you create a function in JavaScript?"
        choices:["A.function myFunction() ", "B.function = myFunction()", "C.function:myFunction()"]
        answer: "A.function myFunction()"
    },
];

// Counters
let correctAnswer = 0;
let questionIndex = 0;

/* FUNCTION SECTION */
// click "Start Quiz" to start timer
let totalTime = 150
function newQuiz() {
    questionIndex = 0;
    totalTime = 150;
    timeLeft.textContent = totalTime;
    playerInitials.textConent = '';

    startSection.style.display = 'none';
    quizSection.style.display = 'block';
    countdownTimer.style.display = 'block';
    timesUp.style.display = 'none';

    let startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if (totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    }, 1000);
    nextQuestion();
};

// Goes to the next questions of the array
function nextQuestion() {
    quizQuestion.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

// Checks if the answer is right then updates correctAnswer to have a point
function checkAnswer(answer) {
    let lineBreak = document.getElementById('line-break');
    lineBreak.style.display = 'block';
    answerCheck.style.display = 'block';

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        correctAnswer++;
        answerCheck.textContent = 'Correct!';
    } else {
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = `Wrong! The correct answer is: ${questions[questionIndex].answer}`
    }

    questionIndex++
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        gameOver();
    }
}

function chooseA() {
    checkAnswer(0);
}
function chooseB() {
    checkAnswer(1);
}
function chooseC() {
    checkAnswer(2);
}
function chooseD() { 
    checkAnswer(3);
}

// Displays the scoreSection, times up and the score of correctAnswer
function gameOver() {
    scoreSection.style.display = 'block';
    quizSection.style.display = 'none';
    startSection.style.display = 'none';
    countdownTimer.style.display = 'none';
    timesUp.style.display = 'block';
    finalScore.textContent = correctAnswer;
}

// Stores players high score in local storage
function storeHighScores(event) {
    event.preventDefault();
    // Prevents player from entering blank value
    if (playerInitials.value === '') {
        alert('Please enter your initials!');
        return;
    }

    startSection.style.display = 'none';
    countdownTimer.style.display = 'block';
    timesUp.style.display = 'none';
    scoreSection.style.display = 'none';
    highScoreSection.style.display = 'block';

    // pulls from local storage
    let savedHighScores = localStorage.getItem('high scores');
    let scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    let userScore = {
        initials: playerInitials.value,
        score: finalScore.textContent
    };

    scoresArray.push(userScore);

    let scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem('high scores', scoresArrayString);

    showHighScores();
}

// To show the High Score Section and to pull the stored local high scores
function showHighScores() {
    startSection.style.display = 'none';
    countdownTimer.style.display = 'none';
    quizSection.style.display = 'none';
    timesUp.style.display = 'none';
    scoreSection.style.display = 'none';
    highScoreSection.style.display = 'block';

    let savedHighScores = localStorage.getItem('high scores');

    if (savedHighScores === null) {
        return;
    }

    let storedHighScores = JSON.parse(savedHighScores);

    for (let i = 0; i < storedHighScores.length; i++) {
        let eachHighScore = document.createElement('p');
        eachHighScore.textContent = `${storedHighScores[i].initials}: ${storedHighScores[i].score}`;
        listOfHighScores.appendChild(eachHighScore);
    }
}

// Start and 4 choice buttons for quiz to listen for a click
startBtn.addEventListener('click', newQuiz);
choiceA.addEventListener('click', chooseA);
choiceB.addEventListener('click', chooseB);
choiceC.addEventListener('click', chooseC);
choiceD.addEventListener('click', chooseD);

// To store players score and initials to local storage
playerInitialsBtn.addEventListener('click', function(event){ 
    storeHighScores(event);
});

// To show the High Score Board
viewHighScore.addEventListener('click', function(event) { 
    showHighScores(event);
});

// Go back button on the high score section to go back home
goBackBtn.addEventListener('click', function() {
    startSection.style.display = 'block';
    highScoreSection.style.display = 'none';
});

// Clears the high scores in local storage 
clearHighScoreBtn.addEventListener('click', function(){
    window.localStorage.removeItem('high scores');
    listOfHighScores.textContent = 'High Scores Cleared!';
    listOfHighScores.setAttribute('style', 'font-family: "Poppins", sans-serif; font-style: italic;')
});
