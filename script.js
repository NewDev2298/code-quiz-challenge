var nextEl = document.querySelector('#next');
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

var advance = function() {
  if (cursor < questions.length - 1) {
    cursor++; 
    displayQuestion();
  }
 
};

nextEl.addEventListener('click', advance);

displayQuestion();
