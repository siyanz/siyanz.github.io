/*
JS for portfolio.
Author: Chaoya Li
*/

$(document).ready(function(){

	/*Shake the iPhone for 1.2 seconds when the document is ready*/
	$(".nameScreen").addClass("shake-constant shake-rotate");
	setTimeout(function(){ $(".nameScreen").removeClass("shake-constant shake-rotate"); }, 1200);
	

	// Screen 1 Animation
  $("#s1").click(function(){
		moveOutScreens();
		moveInHeadshot();
	});

  $("#title-headshot").click(function(){
  	moveOutHeadshot();
		moveInScreens();
		changeTitleToChaoya();
	});

	// Screen 2 Animation
	 $("#s2").click(function(){
		moveOutScreens();
		moveInUX();
		changeTitleToUX();
	});

  $("#title-uxdesign").click(function(){
  	moveOutUX();
		moveInScreens();
		changeTitleToChaoya();
	});

	// Screen 3 Animation
	$("#s3").click(function(){
		moveOutScreens();
		moveInCMU();
		changeTitleToCMU();
	});

  $("#title-cmu").click(function(){
  	moveOutCMU();
		moveInScreens();
		changeTitleToChaoya();
	});

  // Screen 4 Animation
	$("#s4").click(function(){
		moveOutScreens();
		moveInEngineering();
		changeTitleToEngineering();
	});

  $("#title-engineering").click(function(){
  	moveOutEngineering();
		moveInScreens();
		changeTitleToChaoya();
	});

  // Screen 5 Animation
	$("#s5").click(function(){
		moveOutScreens();
		moveInContact();
		changeTitleToContact();
	});

  $("#icon-back").click(function(){
  	moveOutContact();
		moveInScreens();
		changeTitleToChaoya();
	});

  // Screen 6 Animation
	$("#s6").click(function(){
		$(".nameScreen").addClass("shake-constant shake-crazy");
		setTimeout(function(){ $(".nameScreen").removeClass("shake-constant shake-crazy"); $("#title-container").html("Hello. I am Chaoya");}, 500);
		changeTitleToWoops();

	});

	// screens become bigger when hovering.
	$(".nameScreen").hover(function(){	
  	$("#myNameScreens").css("margin-bottom", "0px");
	}, function() {
		$("#myNameScreens").css("margin-bottom", "22px");
	});

});


/* animation JS */

// move the screen out of the page.
function moveOutScreens() {
  setTimeout(function(){ $("#s6").animate({top: '-600px'}); }, 50);
  setTimeout(function(){ $("#s5").animate({top: '-600px'}); }, 100);
  setTimeout(function(){ $("#s4").animate({top: '-600px'}); }, 150);
  setTimeout(function(){ $("#s3").animate({top: '-600px'}); }, 200);
  setTimeout(function(){ $("#s2").animate({top: '-600px'}); }, 250);
  setTimeout(function(){ $("#s1").animate({top: '-600px'}); }, 300);
}

// move the screen back to the page.
function moveInScreens() {
  setTimeout(function(){ $("#s1").animate({top: '0'}); }, 50);
  setTimeout(function(){ $("#s2").animate({top: '0'}); }, 100);
  setTimeout(function(){ $("#s3").animate({top: '0'}); }, 150);
  setTimeout(function(){ $("#s4").animate({top: '0'}); }, 200);
  setTimeout(function(){ $("#s5").animate({top: '0'}); }, 250);
  setTimeout(function(){ $("#s6").animate({top: '0'}); }, 300);
}

// move the contact info out of the page.
function moveOutContact() {
  setTimeout(function(){ $("#icon-back").animate({top: '-600px'}); }, 50);
  setTimeout(function(){ $("#icon-ins").animate({top: '-600px'}); }, 100);
  setTimeout(function(){ $("#icon-email").animate({top: '-600px'}); }, 150);
  setTimeout(function(){ $("#icon-in").animate({top: '-600px'}); }, 200);
  setTimeout(function(){ $("#icon-container").css("z-index", "-1"); }, 500);

}

// move the contact info into the page.
function moveInContact() {
	$("#icon-container").css("z-index", "1000");
  setTimeout(function(){ $("#icon-in").animate({top: '25px'}); }, 50);
  setTimeout(function(){ $("#icon-email").animate({top: '25px'}); }, 100);
  setTimeout(function(){ $("#icon-ins").animate({top: '25px'}); }, 150);
  setTimeout(function(){ $("#icon-back").animate({top: '25px'}); }, 200);
}

// move the headshot into the page.
function moveInHeadshot() {
	setTimeout(function(){ $("#title-headshot").animate({top: '-20px'}); }, 450);
}

// move the headshot out of the page.
function moveOutHeadshot() {
	setTimeout(function(){ $("#title-headshot").animate({top: '-600px'}); }, 0);
}

// move the UX info into the page.
function moveInUX() {
	setTimeout(function(){ $("#title-uxdesign").animate({top: '-20px'}); }, 450);
}

// move the UX info out of the page.
function moveOutUX() {
	setTimeout(function(){ $("#title-uxdesign").animate({top: '-600px'}); }, 0);
}

// move the CMU info into the page.
function moveInCMU() {
	setTimeout(function(){ $("#title-cmu").animate({top: '-20px'}); }, 450);
}

// move the CMU info out of the page.
function moveOutCMU() {
	setTimeout(function(){ $("#title-cmu").animate({top: '-600px'}); }, 0);
}

// move the engineering info into the page.
function moveInEngineering() {
	setTimeout(function(){ $("#title-engineering").animate({top: '-40px'}); }, 450);
}

// move the engineering info out of the page.
function moveOutEngineering() {
	setTimeout(function(){ $("#title-engineering").animate({top: '-600px'}); }, 0);
}


/* change title JS */

function changeTitleToUX() {
	setTimeout(function(){ $("#title-container").html("I am a UX Designer"); }, 900);
}

function changeTitleToChaoya() {
	setTimeout(function(){ $("#title-container").html("Hello. I am Chaoya"); }, 700);
}

function changeTitleToCMU() {
	setTimeout(function(){ $("#title-container").html("Now I am pursuing a master in Emering Media at Carnegie Mellon, focuse on HCI"); }, 900);
}

function changeTitleToEngineering() {
	setTimeout(function(){ $("#title-container").html("Engineering background gives me new perspectives in design"); }, 900);
}

function changeTitleToContact() {
	setTimeout(function(){ $("#title-container").html("Contact Me: chaoyal@andrew.cmu.edu"); }, 700);
}

function changeTitleToWoops() {
	setTimeout(function(){ $("#title-container").html("Whoops"); }, 50);
}



/* the following thw function are for the photography page */

function lightbox(idx) {
  //show the slider's wrapper: this is required when the transitionType has been set to "slide" in the ninja-slider.js
  var ninjaSldr = document.getElementById("ninja-slider");
  ninjaSldr.parentNode.style.display = "block";

  nslider.init(idx);

  var fsBtn = document.getElementById("fsBtn");
  fsBtn.click();
}

function fsIconClick(isFullscreen) { //fsIconClick is the default event handler of the fullscreen button
  if (isFullscreen) {
    var ninjaSldr = document.getElementById("ninja-slider");
    ninjaSldr.parentNode.style.display = "none";
  }
}




