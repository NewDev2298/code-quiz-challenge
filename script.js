var nextEl = document.querySelector('#next');
var optionsEl = document.querySelector('.options');
var cursor = 0;

var questions = [
  "Who was the 35th President of the United States?",
  "Dwyane Wade is most known for his association with which basketball club?",
  "Robyn Fenty is the real name of what popular singer?",
  "Meryl Streep is _ time Oscar winner.",
  "In what city will the 2022 World Cup be located?"
];


var displayQuestion = function () {
  nextEl.textContent = questions[cursor];
};

var quesAdvance = function() {
  if (cursor < questions.length - 1) {
    cursor++; 
    displayQuestion();
  }
  
};

var displayAnswers = function() {
  optionsEl = 
}

var ansAdvance

var choiceSetOne = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4"
]

var choiceSetTwo = [
  "Option 5",
  "Option 6",
  "Option 7",
  "Option 8"  
]

var answerChoices = {choiceSetOne,choiceSetTwo};

nextEl.addEventListener('click', quesAdvance);

displayQuestion();
