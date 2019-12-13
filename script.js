//Array of questions and answers
const questions = [
    {
        title: "What is the HTML tag under which one can write the JavaScript code?",
        choices: ["A) <javascript>", "B) <scripted>", "C) <script>", "D) <js>"],
        answer: "C) <script>"
    },

    {
        title: "Which of the following is the correct syntax to display “The Code Quiz” in an alert box using JavaScript?",
        choices: ["A. alertbox(“The Code Quiz”);", "B. msg(“The Code Quiz”);", "C. msgbox(“The Code Quiz”);", "D. alert(“The Code Quiz”);"],
        answer: "D. alert(“The Code Quiz”);"
    },

    {
        title: "What is the correct syntax for referring to an external script called “quiz.js”?",
        choices: ["A. <script src=”quiz.js”>", "B. <script href=”quiz.js”>", "C. <script ref=”quiz.js”>", "D. <script name=quiz.js”>"],
        answer: "A. <script src=”quiz.js”>"
    },

    {
        title: "4. What is the syntax for creating a function in JavaScript named as codeQuiz?",
        choices: ["A) function = codeQuiz()", "B) function codeQuiz()", "C) function := codeQuiz()", "D) function : codeQuiz()"],
        answer: "B) function codeQuiz()"
    },

    {
        title: "5. How is the function called in JavaScript?",
        choices: ["A) call codeQuiz();", "B) call function codeQuiz();", "C) codeQuiz();", "D) function codeQuiz();"],
        answer: "C) codeQuiz();"
    },
];

// Variables for each page <div>
let mainPage = document.getElementById("main-page");
let questionPage = document.getElementById("question-page");
let endPage = document.getElementById("end-page");
// Variables for buttons
let startBtn = document.getElementById("start");
let restartBtn = document.getElementById("restart");
//Variables for timer
let setTimer;
let beginningTime = questions.length * 10;
let timerDisplay = document.getElementById("display-time");
//Variables for questions
let questionCount = 0;
let questionText = document.getElementById("question-text");
let ansBtn1 = document.getElementById("answer1");
let ansBtn2 = document.getElementById("answer2");
let ansBtn3 = document.getElementById("answer3");
let ansBtn4 = document.getElementById("answer4");
let userAnswer = "";
// Variables for scoring
let userScore = 0;
let finalUserScore = document.getElementById("final-score");
let finishTime = document.getElementById("finish-time");
//Variables for highscores
let submitBtn = document.getElementById("submit");



//When page is loaded
mainPage.removeAttribute("class", "hide1");

// clicking the start button
startBtn.addEventListener("click", startQuiz);

//start button function
function startQuiz() {

    //diplay question page
    mainPage.setAttribute("class", "hide1");
    questionPage.removeAttribute("class", "hide2");
    displayQuestion();

    //set and start timer when clicking start button
    setTimer = setInterval(function() {
        timerDisplay.textContent = beginningTime;
        beginningTime--;
        if(beginningTime < 0){
            clearInterval(setTimer);
            timerDisplay.innerHTML = "0";
            endPage.removeAttribute("class", "hide3");
            mainPage.setAttribute("class", "hide1");
            questionPage.setAttribute("class", "hide2");
            finalUserScore.textContent = userScore;
            finishTime.textContent = beginningTime;
        };
    }, 1000);
};

//Display questions
function displayQuestion() {
    let currentQuestion = questions[questionCount];
    questionText.textContent = currentQuestion.title;
    ansBtn1.textContent = currentQuestion.choices[0];
    ansBtn2.textContent = currentQuestion.choices[1];
    ansBtn3.textContent = currentQuestion.choices[2];
    ansBtn4.textContent = currentQuestion.choices[3];
    console.log(questionCount);
};

//Check for correct answers
function checkAnswer(){
    if (userAnswer === questions[questionCount].answer){
        questionCount ++;
        userScore += 20;
        console.log(userScore);
    }
    else {
        beginningTime -= 15;
        questionCount ++;
        console.log(userScore);
    };

    if (questionCount === 5) {
        endPage.removeAttribute("class", "hide3");
        mainPage.setAttribute("class", "hide1");
        questionPage.setAttribute("class", "hide2");
        finishTime.textContent = beginningTime;
        clearInterval(setTimer);
        timerDisplay.innerHTML = "0";
        finalUserScore.textContent = userScore;
    };    
};

//Click on answer buttons
ansBtn1.addEventListener("click", function(){
    userAnswer = this.textContent;
    checkAnswer();
    displayQuestion();
});

ansBtn2.addEventListener("click", function(){
    userAnswer = this.textContent;
    checkAnswer();
    displayQuestion();
});

ansBtn3.addEventListener("click", function(){
    userAnswer = this.textContent;
    checkAnswer();
    displayQuestion();
});

ansBtn4.addEventListener("click", function(){
    userAnswer = this.textContent;
    checkAnswer();
    displayQuestion();
});

// clicking the restart button
restartBtn.addEventListener("click", restart);

// restart button
function restart() {
    mainPage.removeAttribute("class", "hide1");
    questionPage.setAttribute("class", "hide2");
    endPage.setAttribute("class", "hide3");
    clearInterval(setTimer);
    beginningTime = questions.length * 10;
    questionCount = 0;
    userScore = 0;
};

// clicking submit button
submitBtn.addEventListener("click", submit);

// submit button
function submit() {
    window.location.href = "highscores.html";

}
