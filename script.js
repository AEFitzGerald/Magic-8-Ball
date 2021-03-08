$(document).ready(function(){
var magic8Ball = {};
magic8Ball.listOfAnswers = ["yes", "maybe", "most definitely", "it is likely", "no", "unfortunately not", "keep thinking about it", "not in the immediate future"];
$("#answer").hide();

magic8Ball.askQuestion = function(question) {
	$("#8ball").effect("shake");
	$("#answer").fadeIn(4000);
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");


var randomNumber = Math.random ();
var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberForListOfAnswers);
var answer = this.listOfAnswers[randomIndex];
	$("#answer").text(answer);
		 console.log(question);
        console.log(answer);
};

var onClick = function() {
$("#answer").hide();
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
 setTimeout(function() {
    var question = prompt("Lucky you ask a question and hopefully your dreams come true!");
    magic8Ball.askQuestion(question); }, 1000);
};

$("#questionButton").click( onClick );

});


//var askQuestion = prompt("Lucky you! Ask a question and hopefully your dreams come true");
//magic8Ball.askQuestion(askQuestion);
