var start = document.querySelector("#startQuiz");
// var questionText = document.getElementById('Q1', 'Q2', 'Q3', 'Q4', 'Q5');
var nextQuestion = document.querySelectorAll('section')
// var answer = document.getElementById('answersBtm')
var secondsLeft = 75;

start.addEventListener("click", function(){
    var timer = setInterval(function(){
    secondsLeft--;

        if (secondsLeft <= 0){
      clearInterval(timer)
        }
    },1000);
})

var questions = [

{
    question:"Which one of these is part of the three functions use in Javascript, for converting data types? ",
    answer: [
        {Choice1: "Number", correct: false},
        {Choice2: "boolean", correct: false},
        {Choice3: "string", correct: false},
        {Choice4: "All of the above", correct: true},
    ]
},

{
    question:"How do you create a function in JavaScript?",
    answer: [
        {Choice1: "Function myFunction()", correct: true},
        {Choice2: "Function = myFunction", correct: false},
        {Choice3: "Function: myFunction", correct: false},
        {Choice4: "Function-myFunction", correct: false},
    ]
},

{
    question:"Which one will call the local.setItem element?",
    answer: [
        {Choice1: "local.grabItem", correct: false},
        {Choice2: "local.callItem", correct: false},
        {Choice3: "local.getItem", correct: true},
        {Choice4: "function local.setItem", correct: false},
    ]
},
{
    question:"Which one will allow you to write comments in Javascript?",
    answer: [
        {Choice1: "comment", correct: false},
        {Choice2: "<!-comment->", correct: false},
        {Choice3: "//comment", correct: true},
        {Choice4: "/?comment?/", correct: false},
    ]
},

{
    question:" How do you write a (Code Quiz) alert box?",
    answer: [
        {Choice1: "alert(code quiz)", correct: true},
        {Choice2: "alert=code quiz", correct: false},
        {Choice3: "alert.code quiz", correct: false},
        {Choice4: "alert-code quiz", correct: false},
    ]
},


]

var questionEL = document.getElementById("")






// a start quiz button that also starts a timer that ticks down from 75 ses

// when the correct answer is selected you move to the next question but if the wrong anwser is selected you move on but 3 secs is taking off your time 
// a local storage.set item and grt item
// document.selecter
//need eventlistener for buttons 
// 