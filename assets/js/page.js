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

      if (highlightName == "") {
        if (itemText == "research") {
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
});
