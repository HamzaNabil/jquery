$(document).ready(function() {
  $(".btn").click(function() {
    // $(".demo").toggle(); // show and hide [ hide, show , toggle ]
    // $(".demo").fadeToggle(); // fadeIn fadeOut fadeToggle
    // $(".demo").slideToggle(); // slideDown slideUp slideToggle
  });

  var count = 1;
  $("#add").on("click", function() {
    $(".items").append("<li> item " + count++ + " </li>");
    // $("<li> item " + count++ + " </li>").appendTo(".items");
  });

  // append & appendTo

  // Scroll Window

  var divStart = $(".data").offset().top; // 270

  $(window).scroll(function() {
    var windowScroll = $(this).scrollTop(); // get the space of the scroll

    // when window scroll is greater than or equal to divStart >> then fixed the div

    if (windowScroll >= divStart) {
      $(".data").addClass("fixed");
    } else {
      $(".data").removeClass("fixed");
    }
  });

  // apply style
  $(".applyStyle").css({
    color: "blue",
    fontSize: "20px"
  });

  // Activate Clicked Li
  $("ul li a").click(function() {
    // $("li").removeClass("active");

    $(this) // this is a Home
      .addClass("active")
      .parent() // li for Home Tab
      .siblings() // other li
      .find("a") // search for a
      .removeClass("active");
  });

  // Get and Set
  //   $(".product").html(); // get the value for the div product
  //   $(".product").html("daas"); // set the value for the div product

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $(".scrollTop").show();
    } else {
      $(".scrollTop").hide();
    }
  });

  $(".scrollTop").click(function() {
    $("body, html").animate(
      {
        scrollTop: 0
      },
      700
    );
  });
}); // Dont write anything out this function
