$( document ).ready(function() {
    console.log( "Thank you for visiting my site!" );
    var navItems = $(".main-nav-li");
    var currentPath = document.location.pathname;

    var highlightName = currentPath.toLowerCase();
    highlightName = highlightName.split("/")[1];

    for (var i = 0; i < navItems.length; i++) {
      var item = navItems[i];
      // TODO get text of item match to highlightName
      var itemText = $(item).text().toLowerCase();

      if (highlightName == "" || ["publications", "ux"].includes(highlightName)) {
        if (itemText == "about") {
          $(item).addClass("active");
        }
      }else{
        if (itemText == highlightName) {
          $(item).addClass("active");
        } else {
          $(item).removeClass("active");
        }
      }
    }

    setActiveTag("all");
    showContainer("all");

    // Add smooth scrolling to all links
      $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Change activated text
          for (var i = 0; i < navItems.length; i++) {
              var item = navItems[i];
              // TODO get text of item match to highlightName
              var itemText = $(item).text().toLowerCase();

              if (hash == "#about") {
                if (itemText == "about") {
                  $(item).addClass("active");
                } else{
                  $(item).removeClass("active");
                }
              }

              if (hash == "#research") {
                if (itemText == "research") {
                  $(item).addClass("active");
                } else{
                  $(item).removeClass("active");
                }
              }
            }

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;

          });
        } // End if
      });

      $(window).scroll(function(){
          console.log(window.pageYOffset);
          if (window.pageYOffset > 80) {
            $(".main-nav-div").addClass("sticky-nav");
          } else {
            $(".main-nav-div").removeClass("sticky-nav");
          }

      });
});

function filter(tag) {
  setActiveTag(tag);
  showContainer(tag);
}

function setActiveTag(tag) {
  var catItems = $(".category-tag-a");

  for (var i = 0; i < catItems.length; i++) {
    var cat = catItems[i];
    var catText = $(cat).text().toLowerCase();
    if (catText == tag.toLowerCase()) {
      $(cat).addClass("active");
    } else {
      $(cat).removeClass("active");
    }
  }
}

function showContainer(tag){
  var postItems = $(".post-div");

  for (var i = 0; i < postItems.length; i++) {
    var post = postItems[i];
    var postId = $(post).attr('id');

    $(post).fadeOut("fast");
    if(tag.toLowerCase() == "all") {
      $(post).fadeIn("fast");
    }else if(postId.toLowerCase().indexOf(tag.toLowerCase()) >= 0) {
      $(post).fadeIn("fast");
    }
  }
}
