$(document).ready(function() {
  // Change background color on button click
  $("#changeBackground").click(function() {
    $("body").css("background-color", "#f0e68c"); // Light khaki color
  });

  // Fade-in animation on scroll with debounce
  let debounceTimer;
  $(window).on("scroll", function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function() {
      $("section").each(function() {
        var sectionTop = $(this).offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scrollTop > sectionTop - windowHeight + 100) {
          $(this).addClass("fade-in");
        }
      });
    }, 100);
  });
});
