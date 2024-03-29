var startBtn = document.getElementById("startQuiz");
var questionsTxt = document.getElementById ('Question');
var answerBtn = document.getElementById('answerBtn')
var secondsEL = document.getElementById('secondsEL')
var titlePage = document.getElementById('titlePage')
var secondsLeft = 75;
var currentQuestionIndex = 0; 
var score = 0 ;
var yourScore = document.getElementById('high-score-container')


startBtn.addEventListener("click", function(event){  
    titlePage.style.display = 'none'
    startBtn.style.display = 'none'
    showQuestion();
    event.preventDefault();
    setTime();
    start();
});


function setTime() {
    var timer = setInterval(function() {
      secondsLeft--;
      secondsEL.textContent = secondsLeft;
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
        {Choice: "<-comment->", correct: false},
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
  


function start (){
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}


function showQuestion(){
    if (currentQuestionIndex >= questions.length) {
      questionsTxt.style.display = 'none'
      answerBtn.style.display = 'none'
      score = secondsLeft
      document.getElementById('initialsInput').classList.remove('hide');
      yourScore.innerHTML = `Congratulations! Your score is ${secondsLeft}.`;
      localStorage.setItem('initials', initials);
      localStorage.setItem('score', score);
      return;
        
      } 

    var currentQuestion = questions[currentQuestionIndex];
    var questionNumber = currentQuestionIndex + 1;
    questionsTxt.innerHTML = questionNumber + ". " + currentQuestion.question;
    answerBtn.innerHTML = "";
    
    var answerList = document.createElement('ol');
    answerList.setAttribute('style', 'display: inline-block');
currentQuestion.answer.forEach(answer =>  {
  var listItem = document.createElement('li');
    var button = document.createElement('button')
    button.innerHTML = answer.Choice;
    button.setAttribute('style', 'color: white; background-color: purple;');
    button.setAttribute('onmouseover', "this.style.opacity='0.7';");
    button.setAttribute('onmouseout', "this.style.opacity='1';")

    button.classList.add('btn');
    button.addEventListener('click', function(){
    checkAnswer(answer.correct);
     });
     listItem.appendChild(button);
     answerList.appendChild(listItem);
     
  });
  answerBtn.appendChild(answerList);
}


function checkAnswer(isCorrect) {
    if (isCorrect) {
      score++;
    } else {
      secondsLeft -= 5; // Subtract 5 seconds for incorrect answer
    }
  
    currentQuestionIndex++;
    showQuestion();
  }





// a start quiz button that also starts a timer that ticks down from 75 ses

// when the correct answer is selected you move to the next question but if the wrong anwser is selected you move on but 3 secs is taking off your time 
// a local storage.set item and grt item
// document.selecter
//need eventlistener for buttons 
// 