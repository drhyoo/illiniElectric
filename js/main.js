$(document).ready(function() {
  //Initiate equalize on load
  equalize(".sameHeight");
  equalize(".sameHeightCar");
});

//Equalize on resizing of window
$(window).resize(function() {
  removeHeights(".sameHeight");
  removeHeights(".sameHeightCar");
  equalize(".sameHeight");
  equalize(".sameHeightCar");
});

function equalize(name){
  var heights = $(name).map(function() {
      return $(this).height();
  }).get(),

  maxHeight = Math.max.apply(null, heights);
  $(name).height(maxHeight);
}

function removeHeights(name){
  $(name).height("auto");
}

function hamburgerMenu() {
    var x = document.getElementById("nav-items");
    if (x.className === "nav-items") {
        x.className += " responsive";
    }
    else {
        x.className = "nav-items";
    }
}
