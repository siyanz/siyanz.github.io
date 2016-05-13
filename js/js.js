/*$(window).load(function() {
			// Animate loader off screen
			$('#content').append('<img id="loader" src="loader.gif">');
			$("#loader").fadeIn('normal');
		});
*/

/* getting viewport width */
var responsive_viewport = $(window).width();
var content_down = false;

function showMenu(){
    $('#nav').stop().slideToggle();
    if (content_down == false){
        $('#content').stop().animate({"margin-top":"10.5em"});
        content_down = true;
    }
    else{
        $("#content").stop().animate({"margin-top":"0"});
        content_down = false;
    }
  }

function hideNav(){
    $('#nav').hide();
            // button
    $('#nav').before('<a id="menu_icon" href="#" onclick="showMenu()"><span class = "line1"></span><span class = "line2"></span><span class = "line3"></span></a>');
}

function showNav(){
    $('#nav').show();
    $('#menu_icon').remove();
}

function screen(){
    if($(window).width() <= 770 && $('#menu_icon').size() == 0){         
            // mobile menu
            hideNav();
            }
    else if($(window).width() > 770 && $('#menu_icon').size() > 0){
        // desktop menu
        showNav();
    }
}
function checkSize(){
    if (responsive_viewport < 770 && $('#menu_icon').size() == 0) {
        hideNav();
}
}

$(window).on('resize', function(){
    screen();
});

/* Google Analytics */

$(document).ready(function() {
    checkSize();
    /*
	 $(function () {
        $('#loader').fadeOut('normal');
        $('#loader').remove();
    });


    $('#content').css('display', 'none');

    $('#content').fadeIn(600);


    $('a').click(function(event) {
    console.log(this.href == "#");
    event.preventDefault();

    newLocation = this.href;

    $('#content').fadeOut(400, newpage);

    });


    function newpage() {

    window.location = newLocation;

    }*/

	$(function(){
	  // Instantiate MixItUp for grids:
	  $('.container').mixitup({
	  	targetSelector: '.item'
	  });
	});	
});

/*
    // Check for hash value in URL
    var hash = window.location.hash.substr(1);
    var href = $('#content a').each(function(){
        var href = $(this).attr('href');
        if(hash==href.substr(0,href.length-5)){
            var toLoad = hash+'.html #content';
            $('#content').load(toLoad)
        } 
    });
     
    $('#content a').click(function(){
     
    var toLoad = $(this).attr('href')+' #content';
    $('#content').hide('fast',loadContent);
    window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
    function loadContent() {
        $('#content').load(toLoad,'',showNewContent())
    }
    function showNewContent() {
        $('#content').show('normal',hideLoader());
    }
    function hideLoader() {
        $('#load').fadeOut('normal');
    }
    return false;
});*/