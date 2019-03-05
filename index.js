'use strict'

/*
    *** Question data
*/
const QuestionData = [
    {
      questionNumber: 1,
      question: "What is 1 + 1?",
      answer1: 1,
      answer2: 4,
      answer3: 2,
      answer4: 6,
      correctAnswer: 2,
    },
    {
      questionNumber: 2,
      question: "What is 3 + 1?",
      answer1: 1,
      answer2: 4,
      answer3: 2,
      answer4: 6,
      correctAnswer: 4,
    }
  ];
  
  /*
      *** Button references
  */
  const buttonStart = $('js-start-button');
  const buttonAnswer = $('js-answer-button');
  const buttonNext = $('js-next-button');
  const buttonRestart = $('js-restart-button');
  
  /*
      *** Misc variables
  */
  let score = 0;
  let questionNumber = 0;
  // really, defining these two variables here is probably not good form
  // They should be defined in the functions where they're needed rather
  // than sitting up here as a global and still getting passed to fucntions
//   let questionText = '';
//   let buttonText = '';
  
  
  /*
      *** Functions
  */
  
  // Quiz start functions
  function quizStart() {
    console.log('quizStart()');
    let questionText = 'Are you ready to start?!';
    let buttonText = 'Let\'s go!';
    quizRender(buttonText, questionText);
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
    //$('.js-quiz-question').text(QuestionData[0].question);
    if($('.js-button').hasClass('js-answer-button')) {
        console.log(QuestionData[0].question);
        console.log('quizLoop()');
    }
  }

  function handleAnswerButton() {
      $('.js-quiz-body').on('click', '.js-answer-button', function(event) {
        console.log('Answer button clicked');
      });
  }
  

  // Quiz end functions
  function quizEnd() {
    console.log('quizEnd()');
  }
  
  // 'Generic' render function
  // Split this into differnet templates??
  function quizRender(buttonText = 'Okay!', questionText, answers = []) {
      console.log('quizRender()');
      $('.js-quiz-question').text(questionText);
      $('.js-button').text(buttonText);
      if(answers.length !== 0){

      }
  }
  
  /*
      *** Ready function and high-level breakup of program logic
  */
  
  function runQuiz() {
    quizRender();
    quizStart();
    quizLoop();
    quizEnd();
    handleStartButton();
    handleAnswerButton();
  }
  
  $(runQuiz);