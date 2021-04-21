console.log("aloha");

// inital page presented with start button
//upon clicking start button, a countdown-timer appears
// timer begins starting at 1:00 and a question appears
// user is presented a question and given 4 possible answers. user must select one of four answers.
// if user answers correctly - the next question appears.
// if user answers incorrectly - time will be subtracted from the clock and the next question appears
// the game is complete if/when
// all questions are answered correctly
// timer has reached zero
// upon the games completion, the user is prompted to save their intiials and score

var btnStart = document.querySelector('.start-quiz');
var btnView = document.querySelector('.view-highscores');
var timeAmount = 60;
var timer = 0;
var elCountDownTimer = document.querySelector('.countdown-timer');
var userTimeRemaining = 0;
var timePenalty = 3;
var elQuestion = document.querySelector('.quiz-question');
var elAnswer = document.querySelector('.quiz-answer');
var currentIndex = 0;
var userScore = 0;

var arQuestionBank = [
    ["1. What is a variable in Javascript?", "A. A container for data values", "B. An in-line solution", "C. A property of an object", "D. An inline property", 1],
    ["2. Inside which HTML element do we put the JavaScript?", "A. &lt;scripting&gt;", "B. &lt;script&gt;", "C. &lt;java&gt;", "D. &lt;js&gt;", 2],
    ["3. What does HTML stand for?", "A. Hyper Text Marking Language", "B. High Text Markup Language", "C. High Tech Mechanical Logging", "D.Hyper Text Markup Language", 4],
    ["4. How do you clear your screen in terminal?", "A. ClearScreen", "B. New", "C. cls","D. Reset", 3],
    ["5. What the special characters for arrays?", "A. Square brackets", "B. Parentheses", "C. Periods", "D. Dollar signs", 1],
]
var lastQuestion = arQuestionBank.length - 1;
// ***** FUNCTION DEFINITIONS

function submitAnswer(userChoice) {
    console.log(userChoice);
    var correctAnswer = arQuestionBank[currentIndex][5];
    if (userChoice === correctAnswer) {
        userScore = userScore + 1;
    } else {
        timeAmount = timeAmount - timePenalty;
    }

    console.log(currentIndex);
    if (currentIndex < lastQuestion) {
        currentIndex = currentIndex + 1;
        displayQuestion(currentIndex);
    } else {
        // ******************************** IF LAST QUESTION, DEAL ********************* 
        userTimeRemaining = timeAmount;
        document.querySelector('.quiz-item').classList.add('me-hide');
        document.querySelector('.enter-high-scores').classList.remove('me-hide');
    }
    
}

function displayQuestion(questionNumber) {
    var myHtml = '';
    var qNum = questionNumber;
    for (var i = 1; i < 5; i++) {
        myHtml +=
            '<label><input type="radio" id="radio-' + i + '" name="answer" value="' + i + '" oninput="submitAnswer(' + i + ')">' +
            arQuestionBank[qNum][i] + '</label>'
    }
    console.log(myHtml);
    elQuestion.innerHTML = arQuestionBank[qNum][0];
    elAnswer.innerHTML = myHtml;
}

function updateTime() {

    timeAmount = timeAmount - 1;
    elCountDownTimer.innerText = timeAmount;
    if (timeAmount === 0) {
        clearInterval(timer);
        console.log('GameOver');
    }
}


function startClick() {
    console.log('you clicked');
    // disable view hscore button
    btnView.setAttribute('disabled', '');
    // hide instructions 
    var elInstructions = document.querySelector('.instructions');
    elInstructions.classList.add('me-hide');

    // initalize and show timer starting at 1:00
    timer = setInterval(updateTime, 1000);

    // present first questions with four answers that begin with radio buttons (calling function)
    displayQuestion(currentIndex);
}

function viewScores() {
    console.log('you clicked vs');
}

btnStart.addEventListener("click", startClick);
// btnView.addEventListener("click", viewScores);

