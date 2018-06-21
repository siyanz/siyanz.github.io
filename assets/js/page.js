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

    setActiveTag("all");
    // $(".category-all").addClass("active");
});

function filter(tag) {
  setActiveTag(tag);
  // showContainer(tag);
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
