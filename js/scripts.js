$(document).ready(function() {
  $("button#dogSound").click(function() {
    $("ul#dog").append("<li>Woof! Woof!</li>");
    $("ul#dog").append("<img src='img/dog.jpg'>");

    // after document ready - no doc on page when loaded because we populate lis
    removeObs();
  });

  $("button#catSound").click(function() {
    $("ul#cat").append("<li>Meow! Ftsssschhh!</li>");
    $("ul#cat").append("<img src='img/cat.png'>");

    removeObs();
  });

});


removeObs = function() {
  $("ul#dog").children("li").first().click( function() {
    $(this).remove();
  });

  $("ul#dog").children("img").first().click( function() {
    $(this).remove();
  });

  $("ul#cat").children("li").first().click( function() {
    $(this).remove();
  });

  $("ul#cat").children("img").first().click( function() {
    $(this).remove();
  });
};
