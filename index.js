'use strict'

/*
    *** Button references
*/
// const buttonStart = $('js-start-button');
// const buttonAnswer = $('js-answer-button');
// const buttonNext = $('js-next-button');
// const buttonRestart = $('js-restart-button');
  
/*
    *** Misc variables
*/
let score = 0;
let questionNumber = 0;
// really, defining these two variables here is probably not good form
// They should be defined in the functions where they're needed rather
// than sitting up here as a global and still getting passed to fucntions
// I'm not exactly DRY here but better to repeat two identifiers than
// whole blocks of code. /shrug
// let questionText = '';
// let buttonText = '';
  
  
/*
    *** Functions
*/

// Quiz start functions
function quizStart() {
    console.log('quizStart()');
    let questionText = 'Are you ready to start?!';
    let buttonText = 'Let\'s go!';
    renderQuizBody(buttonText, questionText);
    //handleStartButton();
}
  
function handleStartButton() {
    $('.js-quiz-body').on('click', '.js-start-button', function(event) {
        event.preventDefault();
        $(this).removeClass('js-start-button').addClass('js-answer-button');
        quizLoop();
    });
}
  
// Main quiz loop and logic
function quizLoop() {
    console.log('quizLoop()');
    // get and render current question/answers
    // listen for the submit button
    // check answer and display result

    if($('.js-button').hasClass('js-answer-button')) {
        renderProgress();
        renderNextQuestion(questionNumber);
    }
}

function renderNextQuestion(qn) {
    renderQuizBody('Check it!', QuestionData[qn].question, QuestionData[qn].answers);
}

function handleAnswerButton() {
    $('.js-quiz-body').on('click', '.js-answer-button', function(event) {
        console.log('Answer button clicked');
        $(this).removeClass('js-answer-button').addClass('js-next-button');
        $('.js-button').text('Next >>>');
        giveQuestionFeedback();
    });
}

function giveQuestionFeedback() {
    let selectedAnswer = $('input:checked').siblings('label').text();
    let correct = checkAnswer(selectedAnswer);
    if(correct) {
        score += 1;
        renderScore();
    }
    renderFeedback(correct);
}

function checkAnswer(answer) {
    console.log(answer);
    let temp = answer === QuestionData[questionNumber].correctAnswer;
    console.log(temp);
    return temp;
}

function handleNextButton() {
    console.log('handleNextButton()');
    $('.js-quiz-body').on('click', '.js-next-button', function(event) {
        // Prepare for the next question or quiz end
        $('.js-quiz-answers').html('');
        $('.js-answer-feedback').text('');
        $(this).removeClass('js-next-button');
        // Move to the next question or end the quiz?
        if(questionNumber !== QuestionData.length - 1) {
            questionNumber += 1;
            $(this).addClass('js-answer-button');
            quizLoop();
        }
        else {
            $(this).addClass('js-end-button');
            quizEnd();
        }
    });
}

// Quiz end functions
function quizEnd() {
    console.log('quizEnd()');
    let buttonText = 'Play again?';
    let displayText = `You final score is ${score}`;
    renderQuizBody(buttonText, displayText);
}

function handleEndButton() {
    console.log('handleEndButton()');
    $('.js-quiz-body').on('click', '.js-end-button', function(event) {
        score = 0;
        questionNumber = 0;
        $(this).removeClass('js-end-button').addClass('js-start-button');
        
        quizStart();
    });
}
  
// 'Render' functions
// Split this into differnet templates??
function renderQuizBody(buttonText = 'Oops!', questionText, answers = []) {
    console.log('renderQuizBody()');
    $('.js-quiz-question').text(questionText);
    $('.js-button').text(buttonText);
    if(answers.length !== 0){
        $('.js-quiz-answers').html(
            `<fieldset>
                <div class="answer">
                    <input type="radio" name="answer" id="answer1" >
                    <label for="answer1">${answers[0]}</label>
                </div>
                <div class="answer">
                    <input type="radio" name="answer" id="answer2">
                    <label for="answer2">${answers[1]}</label>
                </div>
                <div class="answer">
                    <input type="radio" name="answer" id="answer3">
                    <label for="answer3">${answers[2]}</label>
                </div>
                <div class="answer">
                    <input type="radio" name="answer" id="answer4">
                    <label for="answer4">${answers[3]}</label>
                </div>
            </fieldset>`
        );
    }
}

function renderFeedback(correct) {
    $('.js-answer-feedback').text(
        correct ?
        `Correct!` :
         `Incorrect. The right answer is ${QuestionData[questionNumber].correctAnswer}`);
}

function renderProgress() {
    $('.js-question-number').text(`Question: ${questionNumber + 1}/${QuestionData.length}`);
}
 function renderScore() {
     $('.js-score').text(score);
 }

/*
    *** Ready function and high-level breakup of program logic
*/

function runQuiz() {
    renderQuizBody();
    quizStart();
    quizLoop();
    //quizEnd();
    handleStartButton();
    handleAnswerButton();
    handleNextButton();
    handleEndButton();
}
  
$(runQuiz);