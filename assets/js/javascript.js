var startBtn = document.getElementById("startQuiz");
var nextBtn = document.getElementById('nextBtn');
var questionsTxt = document.getElementById ('Question');
var answerBtn = document.getElementById('answerBtn')
var secondsLeft = 75;


startBtn.addEventListener("click", function(){
    console.log('start button clicked')
    setTime();
    showQuestion();
});


function setTime() {
    var timer = setInterval(function() {
      secondsLeft--;
      if (secondsLeft <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }



var questions = [ 

{
    question:"Which one of these is part of the three functions use in Javascript, for converting data types? ",
    answer: [
        {Choice: "Number", correct: false},
        {Choice: "boolean", correct: false},
        {Choice: "string", correct: false},
        {Choice: "All of the above", correct: true},
    ]
},

{
    question:"How do you create a function in JavaScript?",
    answer: [
        {Choice: "Function myFunction()", correct: true},
        {Choice: "Function = myFunction", correct: false},
        {Choice: "Function: myFunction", correct: false},
        {Choice: "Function-myFunction", correct: false},
    ]
},

{
    question:"Which one will call the local.setItem element?",
    answer: [
        {Choice: "local.grabItem", correct: false},
        {Choice: "local.callItem", correct: false},
        {Choice: "local.getItem", correct: true},
        {Choice: "function local.setItem", correct: false},
    ]
},
{
    question:"Which one will allow you to write comments in Javascript?",
    answer: [
        {Choice: "comment", correct: false},
        {Choice: "<!-comment->", correct: false},
        {Choice: "//comment", correct: true},
        {Choice: "/?comment?/", correct: false},
    ]
},

{
    question:" How do you write a (Code Quiz) alert box?",
    answer: [
        {Choice: "alert(code quiz)", correct: true},
        {Choice: "alert=code quiz", correct: false},
        {Choice: "alert.code quiz", correct: false},
        {Choice: "alert-code quiz", correct: false},
    ]
},

];


var currentQuestionIndex = 0; 
var score = 0;


function start (){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "next";
     showQuestion();
}


function showQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    var questionNumber = currentQuestionIndex + 1;
    questionsTxt.innerHTML = questionNumber + ". " + currentQuestion.question;
    answerBtn.innerHTML = "";

    currentQuestion.answer.forEach(answer =>  {
    var button = document.createElement('button')
    button.innerHTML = answer.Choice;
    button.classList.add('btn');

    button.addEventListener('click', function(){
    checkAnswer(answer.correct);
     });
     answerBtn.appendChild(button);
  });
}



function checkAnswer(isCorrect) {
    if (isCorrect) {
      score++;
    } else {
      secondsLeft -= 5; // Subtract 5 seconds for incorrect answer
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      'Quiz is over'
      
    }
  }




// a start quiz button that also starts a timer that ticks down from 75 ses

// when the correct answer is selected you move to the next question but if the wrong anwser is selected you move on but 3 secs is taking off your time 
// a local storage.set item and grt item
// document.selecter
//need eventlistener for buttons 
// 