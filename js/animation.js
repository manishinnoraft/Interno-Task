

//Counter Js
var animationTriggered = false;

$(window).on("scroll", function(){
  var windowBottom = $(window).scrollTop() + $(window).height();
  var sectionTop = $(".counter_section").offset().top;

  if (windowBottom - 100 >= sectionTop && !animationTriggered) {
    $(".counter_section").css("opacity", "1");

    $(".counter__card h2").each(function() {
      var $h2 = $(this);
      var targetValue = parseInt($h2.text());
      var currentNumber = 1;
      var step = 1;

      var counterInterval = setInterval(function() {
        $h2.text(currentNumber);
        currentNumber += step;

        if (currentNumber >= targetValue) {
          $h2.text(targetValue);
          clearInterval(counterInterval);
        }
      }, 10);
    });

    // Set the flag to true to indicate that the animation has been triggered
    animationTriggered = true;
  } else if (!animationTriggered) {
    // Reset to original state when out of viewport without triggering the animation
    $(".counter__card h2").each(function() {
      var $h2 = $(this);
      var originalValue = $h2.text(); // Capture the original value
      $h2.text(originalValue);
    });
    $(".counter_section").css("opacity", "0");
  }
});


