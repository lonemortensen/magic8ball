/* ===== Magic8Ball JavaScript ===== */

$(document).ready(function() {
	
	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["It is certain", "Without a doubt", "Most likely", "Ask again later", "Cannot predict now", "My reply is no", "Very doubtful"];

	magic8Ball.getAnswer = function (question)
	{
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		$("#answer").fadeIn(4000);
		var randomNumber = Math.random();
		var randomNumberArray = randomNumber * this.listOfAnswers.length;
		var randomIndex = Math.floor(randomNumberArray);
		var answer = this.listOfAnswers[randomIndex];
		$("#answer").text(answer); 
		console.log(question);
		console.log(answer);
	};

	$("#answer").hide(); 
		
	var onClick = function () {
		$("#answer").hide();
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
		setTimeout(
			function() {
				$("#8ball").effect("shake");
				var question = prompt("Ask a Yes/No question");
				magic8Ball.getAnswer(question);}, 500);
	};	

	$("#questionButton").click( onClick );

});	