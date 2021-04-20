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

var btnStart = document.querySelector('button');
var timeAmount = 60;
var elCountDownTimer = document.querySelector('.countdown-timer');
var elQuestion = document.querySelector('.quiz-question');
var elAnswer = document.querySelector('.quiz-answer');
var arQuestionBank = [
    ["Question 1", "Q1Answer 1", "Q1Answer 2", "Q1Answer 3", "Q1Answer 4", 1],
    ["Question 2", "Q2Answer 1", "Q2Answer 2", "Q2Answer 3", "Q2Answer 4", 2],
    ["Question 3", "Q3Answer 1", "Q3Answer 2", "Q3Answer 3", "Q3Answer 4", 4],

]

// ***** FUNCTION DEFINITIONS
function displayQuestion(questionNumber) {
    var myHtml='';
    var qNum = questionNumber-1;
    for (var i = 1; i < 5; i++) {
        myHtml += '<input type="radio" id="radio-' + i + '" name="answer" value="' + i + '"><label>'+arQuestionBank[qNum][i]+'</label>'
    }
    console.log(myHtml);
    elQuestion.innerHTML = arQuestionBank[qNum][0];
    elAnswer.innerHTML = myHtml;
}

function updateTime() {

    timeAmount = timeAmount - 1;
    elCountDownTimer.innerText = timeAmount;
}

function startclick() {
    console.log('you clicked');
    // hide instructions 
    var elInstructions = document.querySelector('.instructions');
    elInstructions.classList.add('me-hide');

    // initalize and show timer starting at 1:00
    var displayTime = setInterval(updateTime, 1000);

    // present first questions with four answers that begin with radio buttons (calling function)
    displayQuestion(1);
}


btnStart.addEventListener("click", startclick);