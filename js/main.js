$(document).ready(function() {
  //Initiate equalize on load
  equalize();
});

//Equalize on resizing of window
$(window).resize(function() {
  removeHeights();
  equalize();
});

function equalize(){
  var heights = $(".sameHeight").map(function() {
      return $(this).height();
  }).get(),

  maxHeight = Math.max.apply(null, heights);
  $(".sameHeight").height(maxHeight);
}

function removeHeights(){
  $(".sameHeight").height("auto");
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
