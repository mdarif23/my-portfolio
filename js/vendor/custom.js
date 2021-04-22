$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("fixed_top");
    } else {
      $("header").removeClass("fixed_top");
    }
  });
});

$(document).ready(function () {
  $(".btn").click(function () {
    var name = $(this).attr("data-filter");
    if (name == "all") {
      $(".project_list").show("2000");
    } else {
      $(".project_list")
        .not("." + name)
        .hide("2000");
      $(".project_list")
        .filter("." + name)
        .show("2000");
    }
  });
});
$(document).ready(function () {
  $(".btn-dark").click(function () {
    $(".btn-dark").css("background-color", "");
    $(this).css("background-color", "black");
  });
});

// slick slider
$(".center").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 490,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
//slick end
//counter up start
$(document).ready(function () {
  $(".counter_up").counterUp({
    delay: 3,
    time: 1000,
  });
});

//counter up end
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

$(function () {
  $("#menu").slicknav({
    prependTo: ".menu2",
  });
});

$(document).ready(function () {
  $("body").materialScrollTop();
});
