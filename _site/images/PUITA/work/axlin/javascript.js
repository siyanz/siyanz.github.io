console.log("this is working")

$(function() {

/* toggle timer with indicator */
$(".glyphicon-time").click(function(){
	$(this).toggleClass('underline');
	$("#counter").animate({
		height: 'toggle'});
});

/* timer settings */
var today = new Date();
var timeElapsed = 0;
var n = 0;

function start() {
    today.setMinutes(0);
    today.setSeconds(timeElapsed);
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("counter").innerHTML =
    m + ":" + s;
    timeElapsed = timeElapsed + n;
    var t = setTimeout(start, 1000);
}

function resetTimer() {
	timeElapsed = 0;
	n = 1;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function stopTimer() {
	timeElapsed = 0;
	n = 0;
}

/* question variables */
var questions = 10;
var random = 0;

/* fadeout instructions page, fade in questions */
$("#pre-questions-button").click(function(){
	random = Math.floor(Math.random() * $(".question").length);
	$(".question").hide().eq(random).show();
	$("#instruction-page").fadeOut("slow", function() {
		$("#question-page").fadeIn("slow");
	resetTimer();
	});
});

/* fade in questions */
$("#next-button").click(function(){
	questions--;
 	if (questions == 0) {
  		$('#question-page').fadeOut("slow", function() {
   		$("#end-page").fadeIn("slow");
   		stopTimer();
  	});
  	return;
 	}
 	$('.question').eq(random).fadeOut("slow", function() {
 		$('.question').eq(random).remove();
  		random = Math.floor(Math.random() * $('.question').length);
  		$('.question').eq(random).fadeIn('slow');
  		resetTimer();
 	});
});

/* hide other pages initially */
$("#instruction-page").hide();
$("#question-page").hide();
$("#end-page").hide();

/* fadeout 1st page, fade in 2nd page */
$("#start-button").click(function(){
    $("#logo-screen").fadeOut("slow", function(){
    	$("#instruction-page").fadeIn("slow");
   	});
});

/* name input */
$("#start-button").click(function(){
	var userName = $('input:text').val();
	$("#hello-name").html("Hi, " + userName + ". It's a pleasure to meet you.");
});

/* restart questions */ 
$("#again-button").click(function(){
	location.reload();
});

/* press enter key after name input to continue */
$(".form-control").on('keyup', function (e) {
    if (e.keyCode == 13) {
    	var userName = $('input:text').val();
		$("#hello-name").html("Hi, " + userName + ". It's a pleasure to meet you.");
        $("#logo-screen").fadeOut("slow", function(){
    		$("#instruction-page").fadeIn("slow");
    	});
    }
});

/* load timer */
start();

});