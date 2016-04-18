var count = 0;

var displayedCount = 1;

$(document).ready(function() {

	$("#dialog-box-right").hide();
	$("#dialog-box-end").hide();
	$("#dialog-box-wrong").hide();

	displayQuestion();

	// increaseCount();
	
	displayCount();
	
	$("li").click(function() {


		if (displayedCount < 5) {
			checkAnswer( $(this) );
			increaseCount();
			displayCount();
			displayQuestion();
		} else {
			endQuiz();
			checkAnswer( $(this) );
		}
		
	});



});

var quizItems = new Array();

quizItems[0] = new QuizItem(
	'Who is The Green Arrows love interest?',
	'Wonder Woman',
	'Diana Ross',
	'Black Canary',
	'Batgirl',
	'Black Canary',
	'',
	'Black Canary'
);

quizItems[1] = new QuizItem(
	'Who is The Green Arrows sidekick?',
	'Speedy',
	'Green Arrow jr',
	'Green Lantern',
	'The Flash',
	'Speedy',
	'',
	'Speedy'
);

quizItems[2] = new QuizItem(
	'What city is The Green Arrow from?',
	'Gotham',
	'Star City',
	'New York',
	'Metropolis',
	'Star City',
	'',
	'Star City'
);

quizItems[3] = new QuizItem(
	'Who portrays The Green Arrow on TV?',
	'Brad Pitt',
	'Stephen Amell',
	'Denzel Washington',
	'Ethan Hawke',
	'Stephen Amell',
	'',
	'Stephen Amell'
);

quizItems[4] = new QuizItem(
	'Who is The Green Arrow?',
	'Roy Harper',
	'Mia Dearden',
	'Barry Allen',
	'Oliver Queen',
	'Oliver Queen',
	'',
	'Oliver Queen'
);

function QuizItem(question, answer1, answer2, answer3, answer4, realAnswer, userAnswer, explanation) {
	this.question    = question;
	this.answer1     = answer1;
	this.answer2     = answer2;
	this.answer3     = answer3;
	this.answer4     = answer4;
	this.realAnswer  = realAnswer;
	this.userAnswer  = userAnswer;
	this.explanation = explanation;
}

function displayQuestion() {
	$('.question-1 h2').text(quizItems[count].question);
	$('.answer-1').text(quizItems[count].answer1);
	$('.answer-2').text(quizItems[count].answer2);
	$('.answer-3').text(quizItems[count].answer3);
	$('.answer-4').text(quizItems[count].answer4);
}

function increaseCount() {
	count++;
	displayedCount++;
}

function displayCount() {
	$('.count').text(displayedCount);
}

function checkAnswer(clickedElement) {
	var userAnswer = clickedElement.text();

	if (userAnswer == quizItems[count].realAnswer) {
		$(function() {
    		$( "#dialog-box-right" ).dialog();
  		});
	} else {
		$(function() {
    		$( "#dialog-box-wrong" ).dialog();
  		});
	}
}

function endQuiz() {
	$(function() {
    	$( "#dialog-box-end" ).dialog();
  	});
}