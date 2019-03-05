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
  
  
  /*
      *** Functions
  */
  
  // Quiz start functions
  function quizStart() {
    console.log('quizStart()');
    let questionText = 'Are you ready to start?!';
    let answers = [];
    let buttonText = 'Let\'s go!';
    quizRender(buttonText, questionText, answers);
    handleStartButton();
  }
  
  function handleStartButton() {
      console.log('handleStartButton();');
      $('.js-quiz-body').on('click', '.js-start-button', function(event) {
        event.preventDefault();
        console.log('click detected?');
        $(this).removeClass('js-start-button').addClass('js-answer-button');
      });
      quizLoop();
  }
  
  // Main quiz loop and logic
  function quizLoop() {
    // get and render current question
    // listen for the submit button
    // check answer and display result
    //$('.js-quiz-question').text(QuestionData[0].question);
    console.log(QuestionData[0].question);
    console.log('quizLoop()');
  }
  

  // Quiz end functions
  function quizEnd() {
    console.log('quizEnd()');
  }
  
  // 'Generic' render function
  // Split this into differnet templates??
  function quizRender(buttonText, questionText, answers) {
    $('.js-quiz-question').text(questionText);
    $('.js-button').text(buttonText);
  }
  
  /*
      *** Ready function and high-level breakup of program logic
  */
  
  function runQuiz() {
    quizStart();
    quizLoop();
    quizEnd();
    quizRender();
  }
  
  $(runQuiz);