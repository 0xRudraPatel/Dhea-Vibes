/* ==============
 ========= js documentation ==========================

 * theme name: Evlio
 * version: 1.0
 * description: Virtual Conference Html5 Template
 * author: uiaxis
 * author url: https://themeforest.net/user/uiaxis

    ==================================================

     01. preloader
     -------------------------------------------------
     02. data background
     -------------------------------------------------
     03. navbar
     -------------------------------------------------
     04. conference tab
     -------------------------------------------------
     05. pricing modal
     -------------------------------------------------
     06. conference details modal
     -------------------------------------------------
     07. scroll to top with progress

    ==================================================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // preloader
    setTimeout(function () {
      $("#ctn-preloader").addClass("loaded");
      if ($("#ctn-preloader").hasClass("loaded")) {
        $("#preloader")
          .delay(1000)
          .queue(function () {
            $(this).remove();
          });
      }
    }, 2000);

    // data background
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });

    // navbar
    $(".nav__bar").on("click", function () {
      $(this).toggleClass("nav__bar-toggle");
      $(".nav__menu").toggleClass("nav__menu-active");
      $(".backdrop").toggleClass("backdrop-active");
      $("body").toggleClass("body-active");
    });

    $(".backdrop, .nav__menu-close, .hide-nav").on("click", function () {
      $(".backdrop").removeClass("backdrop-active");
      $(".nav__bar").removeClass("nav__bar-toggle");
      $(".nav__menu").removeClass("nav__menu-active");
      $(".nav__dropdown").removeClass("nav__dropdown-active");
      $(".nav__menu-link--dropdown").next(".nav__dropdown").slideUp(500);
      $(".nav__menu-link--dropdown").removeClass(
        "nav__menu-link--dropdown-active"
      );
      $("body").removeClass("body-active");
    });

    $(window).on("resize", function () {
      $(".backdrop").removeClass("backdrop-active");
      $(".nav__bar").removeClass("nav__bar-toggle");
      $(".nav__menu").removeClass("nav__menu-active");
      $(".nav__dropdown").removeClass("nav__dropdown-active");
      $(".nav__menu-link--dropdown").removeClass(
        "nav__menu-link--dropdown-active"
      );
      $("body").removeClass("body-active");
      $(".ticket-modal").slideUp();
      $(".conference-modal").slideUp();
    });

    $(".nav__menu-link--dropdown").on("click", function () {
      $(this).next(".nav__dropdown").toggleClass("nav__dropdown-active");
      $(this).toggleClass("nav__menu-link--dropdown-active");
    });

    // on window scroll
    $(window).on("scroll", function () {
      // position navbar on scroll
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $(".header").removeClass("header-active");
      } else {
        $(".header").addClass("header-active");
      }
    });

    // conference tab
    $(".conference__tab-content").hide();
    $(".conference__tab-content:first").show();
    $(".conference__tab-btn").on("click", function () {
      $(".conference__tab-btn").removeClass("conference__tab-btn--active");
      $(this).addClass("conference__tab-btn--active");
      $(".conference__tab-content").hide();
      var activeConference = $(this).attr("href");
      $(activeConference).fadeIn(500);
      return false;
    });

    // pricing modal
    $(".open-ticket").on("click", function () {
      $(".ticket-modal").slideDown();
      $("body").addClass("body-active");
    });

    $(".close-ticket").on("click", function () {
      $(".ticket-modal").slideUp();
      $("body").removeClass("body-active");
    });

    // conference details modal
    $(".open-conference").on("click", function () {
      $(".conference-modal").slideDown();
      $("body").addClass("body-active");
    });

    $(".close-conference").on("click", function () {
      $(".conference-modal").slideUp();
      $("body").removeClass("body-active");
    });
    
    // conference details modal - 2

    $(".open-conference-2").on("click", function () {
      $(".conference-modal-2").slideDown();
      $("body").addClass("body-active");
    });

    $(".close-conference-2").on("click", function () {
      $(".conference-modal-2").slideUp();
      $("body").removeClass("body-active");
    });

    // conference details modal - 3

    $(".open-conference-3").on("click", function () {
      $(".conference-modal-3").slideDown();
      $("body").addClass("body-active");
    });

    $(".close-conference-3").on("click", function () {
      $(".conference-modal-3").slideUp();
      $("body").removeClass("body-active");
    });

    // conference details modal - 4

    $(".open-conference-4").on("click", function () {
      $(".conference-modal-4").slideDown();
      $("body").addClass("body-active");
    });

    $(".close-conference-4").on("click", function () {
      $(".conference-modal-4").slideUp();
      $("body").removeClass("body-active");
    });

    // conference details modal - 5

    $(".open-conference-5").on("click", function () {
      $(".conference-modal-5").slideDown();
      $("body").addClass("body-active");
    });

    $(".close-conference-5").on("click", function () {
      $(".conference-modal-5").slideUp();
      $("body").removeClass("body-active");
    });

    // conference details modal - 6

    $(".open-conference-6").on("click", function () {
      $(".conference-modal-6").slideDown();
      $("body").addClass("body-active");
    });

    $(".close-conference-6").on("click", function () {
      $(".conference-modal-6").slideUp();
      $("body").removeClass("body-active");
    });

    // scroll to top with progress
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > offset) {
        $(".progress-wrap").addClass("active-progress");
      } else {
        $(".progress-wrap").removeClass("active-progress");
      }
    });
    $(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });


    // theme switcher

    var checkBox = document.getElementById("chk");

    var theme = window.localStorage.getItem("data-theme");
    if (theme) document.documentElement.setAttribute("data-theme", theme);
    checkBox.checked = theme == "light" ? true : false;

    checkBox.addEventListener("change", function () {
      if (this.checked) {
        document.documentElement.setAttribute("data-theme", "light");
        window.localStorage.setItem("data-theme", "light");
        $('link[href="assets/css/main.css"]').attr("href", "assets/css/light.css");
        $('img[src="assets/images/logo-light.png"]').attr("src", "assets/images/logo-alt.png");
        $('#lightLogo').attr("src", "assets/images/logo-alt.png");
        $('img[src="assets/images/standard.png"]').attr("src", "assets/images/standard-light.png");
        $('img[src="assets/images/premium.png"]').attr("src", "assets/images/premium-light.png");
        $('img[src="assets/images/vip.png"]').attr("src", "assets/images/vip-light.png");
        $('img[src="assets/images/sponsor/one.png"]').attr("src", "assets/images/sponsor/one-light.png");
        $('img[src="assets/images/sponsor/two.png"]').attr("src", "assets/images/sponsor/two-light.png");
        $('img[src="assets/images/sponsor/three.png"]').attr("src", "assets/images/sponsor/three-light.png");
        $('img[src="assets/images/sponsor/four.png"]').attr("src", "assets/images/sponsor/four-light.png");
        $('img[src="assets/images/sponsor/five.png"]').attr("src", "assets/images/sponsor/five-light.png");
        $('img[src="assets/images/sponsor/six.png"]').attr("src", "assets/images/sponsor/six-light.png");
        $('img[src="assets/images/sponsor/seven.png"]').attr("src", "assets/images/sponsor/seven-light.png");
        $('img[src="assets/images/sponsor/eight.png"]').attr("src", "assets/images/sponsor/eight-light.png");
        $('img[src="assets/images/sponsor/nine.png"]').attr("src", "assets/images/sponsor/nine-light.png");
        $('img[src="assets/images/sponsor/ten.png"]').attr("src", "assets/images/sponsor/ten-light.png");
        $('img[src="assets/images/form-bg.png"]').attr("src", "assets/images/form-bg-light.png");

      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("data-theme", "dark");
        $('link[href="assets/css/light.css"]').attr("href", "assets/css/main.css");
        $('img[src="assets/images/logo-alt.png"]').attr("src", "assets/images/logo-light.png");
        $('#lightLogo').attr("src", "assets/images/logo.png");
        $('img[src="assets/images/standard-light.png"]').attr("src", "assets/images/standard.png");
        $('img[src="assets/images/premium-light.png"]').attr("src", "assets/images/premium.png");
        $('img[src="assets/images/vip-light.png"]').attr("src", "assets/images/vip.png");
        $('img[src="assets/images/sponsor/one-light.png"]').attr("src", "assets/images/sponsor/one.png");
        $('img[src="assets/images/sponsor/two-light.png"]').attr("src", "assets/images/sponsor/two.png");
        $('img[src="assets/images/sponsor/three-light.png"]').attr("src", "assets/images/sponsor/three.png");
        $('img[src="assets/images/sponsor/four-light.png"]').attr("src", "assets/images/sponsor/four.png");
        $('img[src="assets/images/sponsor/five-light.png"]').attr("src", "assets/images/sponsor/five.png");
        $('img[src="assets/images/sponsor/six-light.png"]').attr("src", "assets/images/sponsor/six.png");
        $('img[src="assets/images/sponsor/seven-light.png"]').attr("src", "assets/images/sponsor/seven.png");
        $('img[src="assets/images/sponsor/eight-light.png"]').attr("src", "assets/images/sponsor/eight.png");
        $('img[src="assets/images/sponsor/nine-light.png"]').attr("src", "assets/images/sponsor/nine.png");
        $('img[src="assets/images/sponsor/ten-light.png"]').attr("src", "assets/images/sponsor/ten.png");
        $('img[src="assets/images/form-bg-light.png"]').attr("src", "assets/images/form-bg.png");
      }
    });

    if (localStorage.getItem("data-theme") == "light") {
      $('link[href="assets/css/main.css"]').attr("href", "assets/css/light.css");
      $('img[src="assets/images/logo-light.png"]').attr("src", "assets/images/logo-alt.png");
      $('#lightLogo').attr("src", "assets/images/logo-alt.png");
      $('img[src="assets/images/standard.png"]').attr("src", "assets/images/standard-light.png");
      $('img[src="assets/images/premium.png"]').attr("src", "assets/images/premium-light.png");
      $('img[src="assets/images/vip.png"]').attr("src", "assets/images/vip-light.png");
      $('img[src="assets/images/sponsor/one.png"]').attr("src", "assets/images/sponsor/one-light.png");
      $('img[src="assets/images/sponsor/two.png"]').attr("src", "assets/images/sponsor/two-light.png");
      $('img[src="assets/images/sponsor/three.png"]').attr("src", "assets/images/sponsor/three-light.png");
      $('img[src="assets/images/sponsor/four.png"]').attr("src", "assets/images/sponsor/four-light.png");
      $('img[src="assets/images/sponsor/five.png"]').attr("src", "assets/images/sponsor/five-light.png");
      $('img[src="assets/images/sponsor/six.png"]').attr("src", "assets/images/sponsor/six-light.png");
      $('img[src="assets/images/sponsor/seven.png"]').attr("src", "assets/images/sponsor/seven-light.png");
      $('img[src="assets/images/sponsor/eight.png"]').attr("src", "assets/images/sponsor/eight-light.png");
      $('img[src="assets/images/sponsor/nine.png"]').attr("src", "assets/images/sponsor/nine-light.png");
      $('img[src="assets/images/sponsor/ten.png"]').attr("src", "assets/images/sponsor/ten-light.png");
      $('img[src="assets/images/form-bg.png"]').attr("src", "assets/images/form-bg-light.png");
    }

    if (localStorage.getItem("data-theme") == "dark") {
      $('link[href="assets/css/light.css"]').attr("href", "assets/css/main.css");
      $('img[src="assets/images/logo-alt.png"]').attr("src", "assets/images/logo-light.png");
      $('#lightLogo').attr("src", "assets/images/logo.png");
      $('img[src="assets/images/standard-light.png"]').attr("src", "assets/images/standard.png");
      $('img[src="assets/images/premium-light.png"]').attr("src", "assets/images/premium.png");
      $('img[src="assets/images/vip-light.png"]').attr("src", "assets/images/vip.png");
      $('img[src="assets/images/sponsor/one-light.png"]').attr("src", "assets/images/sponsor/one.png");
      $('img[src="assets/images/sponsor/two-light.png"]').attr("src", "assets/images/sponsor/two.png");
      $('img[src="assets/images/sponsor/three-light.png"]').attr("src", "assets/images/sponsor/three.png");
      $('img[src="assets/images/sponsor/four-light.png"]').attr("src", "assets/images/sponsor/four.png");
      $('img[src="assets/images/sponsor/five-light.png"]').attr("src", "assets/images/sponsor/five.png");
      $('img[src="assets/images/sponsor/six-light.png"]').attr("src", "assets/images/sponsor/six.png");
      $('img[src="assets/images/sponsor/seven-light.png"]').attr("src", "assets/images/sponsor/seven.png");
      $('img[src="assets/images/sponsor/eight-light.png"]').attr("src", "assets/images/sponsor/eight.png");
      $('img[src="assets/images/sponsor/nine-light.png"]').attr("src", "assets/images/sponsor/nine.png");
      $('img[src="assets/images/sponsor/ten-light.png"]').attr("src", "assets/images/sponsor/ten.png");
      $('img[src="assets/images/form-bg-light.png"]').attr("src", "assets/images/form-bg.png");
    }


  });
})(jQuery);

