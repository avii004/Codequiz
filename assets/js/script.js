// References for HTML
// Highscore and timer - links to top of the screen
let Viewhighscore = document.getElementByID( 'View-high-score' );
let countdownTimer = document.getElementByID( 'countdown-timer);
let timeLeft = document.getElementByID( 'times-up');

// Start Section - links to start section and the "Start Quiz" button
let quizSection = document.getElementByID( 'start-section');
let startBtn = document.getElementByID( 'startBtn);

// Quiz section - links to the quiz and buttons
let quizSection = document.getElementByID( 'quizSection');
let quizQuestion = document.getElementByID( 'quizQuestion);
// Links to button elements
let choiceA = document.getElementByID( 'button-0' );
let choiceB = document.getElementByID( 'button-1' );
let choiceC = document.getElementByID( 'button-2' );
let choiceD = document.getElementByID( 'button-3' );

let answercheck = document.getElementByID( 'answercheck');

// Score Section - links to the final score, player initials input, and submit button
let scoreSection = document.getElementID( 'scoreSection' );
let finalScore = document.getElementID( 'finalScore');
let playerInitials = document.getElementID('playerInitials');
let playerInitialsBtn = document.getElementID('playerInitialsBtn');

//High Score Section - links to highscore with a button to go back to start and clesr high score 
let highScoreSection = document.getElementID('highscore');
let listOfHighScores = document.getElementID('listOfHighScores');
let goBackButton = document.getElementID('goBackButton');
let clearHighScoresButton = document.getElementID('clearHighScoresButton');

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

/* Function Section */
// click "Start Quix" to start timer
let totaltime=200
function newQuiz() {
    questionIndex = 0;
    totalTime = 200;
    timeLeft.textContent = totalTime;
    playerInitials.textContent = '';

    startSection.style.display = 'None';
    quizSection.style.display = 'block';
    countdownTimer.style.display = 'block';
    timesUp.style.display = 'None';

    let startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if (totalTime<=0) {
            clearInterval (startTimer);
            if (questionIndex < questions.length - 1){
                gameOver();
            }
        }
    }, 1000);
    nextQuestion();
};

// Goes to the next questions of the array
function nextQuestion() {
    quizQuestion.textContent = questions [questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

//Check if answers are right then updates the correctAnswer to have a point 
function checkAnswer(answer) {
    let lineBreak = document.getElementID( 'lineBreak');
    lineBreak.style.display = 'block';
    aswerCheck.style.display = 'block';

    if (questions[questionIndex].answer === questions[questionIndex].choices[answers]) {
        correctAnswers++;
        answerCheck.textContent = totalTime;
        answerCheck.textContent = `Wrong! The Correct answer is: ${questions[questionsIndex]answers}`
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

// Display the scoreSection, times up and the score of correctAnswer
function gameOver() {
    scoreSection.style.display = 'block';
    quizSection.style.display = 'None';
    startSection.style.display = 'None';
    countdownTimer.style.display = 'None';
    timesUp.style.display = 'block';
    finalScore.TextContent = correctAnswer;
}

// Store players high score in local storage
function storeHighScore(event) {
    event.preventDefault();
    // Prevents player from entering blank value
    if (playerInitials.value === '') {
        alert('playerInitials');
        returns;
}

startSection.style.display = 'None';
countdownTimer.style.display = 'block';
timesUp.style.display = 'None';
scoreSection.Style.display = 'None';
highSCoreSection.Style.display = 'block';

//Pulls from local storage
let savedHighSCores = localStorage.getItem( 'highscore' );
let scoresArray;

if (savedHighSCores ===null) {
    scoresArray = [];
} else {
    scoresArray = Json.parse(savedHighScores)
}

let userScore = {
    initials: playerInitials.value,
    score:finalSCore.textContent
};

scoresArray.push(userScore);

let scoresArrayString = JSON.stringify(scoresArray);
window.localStorage.setItem('high scores', scoresArrayString);

showHighScores();
}

//Showing the high score section and to pull the stored local high scores 
function showHighScores() {
    startSection.style.display = 'none';
    coundownTimer.style.display = 'none';
    quizSection.style.display = 'none';
    timesUp.style.display = 'none';
    scoreSection.style.display = 'none';
    highScoreSection.style.display = 'block';

    let savedHighScores = localStorage.getItem( 'high scores' );

    if (savedHighScores ===null) {
        return;
    }

    let storedHighScore = JSON.parse(savedHighScores);

    for (let i = 0; i < storedHighScores.length; i++) {
        let eachHighScore = document.createElement( 'p' );
        eachHighScore.textContent = `${storedHighScores[i].initials}: ${storedHighScores[i].score}`;
        listOfHighScores.appendCHild(eachHighScore);
    }
}

//Start and 4 choice buttons for the quiz to listen for a click
startBtn.addEventListener( 'click', newQuiz);
choiceA.addEventListener( 'click', chooseA);
choiceB.addEventListener( 'click', chooseB);
choiceC.addEventListener( 'click', chooseC);
choiceD.addEventListener( 'click', chooseD);

//To store players score and their intials to the local storage
playerInitialsBtn.addEventListener( 'click', function(event){
    storedHighScores(event);
});

//To show the high score board 
viewHighScore.addEventListener( 'click', function(event) {
    showHighScores(event);
});

//Go back button on the high score section to go back home
goBackBtn.addEventListener( 'click', function() {
    startSection.style.display = 'block' ;
    highScoreSection.style.display = 'none';
});

//Clears high scores in local storage
clearHighScoreBtn.addEventListener('click', function(){
    window.localStorage.removeItem('high scores');
    listOfHighScores.textContent = 'High Scores Cleared!';
    listOfHighScores.setAttribute( 'style', 'font-family: 'Courier New', monospace;)
});
