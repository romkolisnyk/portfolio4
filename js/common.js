// -------PRELOADER
var preload = document.querySelector(".loader");

function fadeOut(el) {
  el.style.opacity = 1;
  var interval = setInterval(function () {
    el.style.opacity = el.style.opacity - 0.05;
    if (el.style.opacity <= 0.05) {
      clearInterval(interval);
      preload.style.display = "none";
    }
  }, 16);
}
window.onload = function () {
  setTimeout(function () {
    fadeOut(preload);
  }, 100);
};

document.addEventListener("DOMContentLoaded", function () {

  var hashcode = window.location.hash;

  if (hashcode != "") {
    setTimeout(function () {
      $('html, body').animate({ scrollTop: $(hashcode).offset().top - 70 }, 1000);
    }, 200);
  }

  window.addEventListener("scroll", function () {
    if (pageYOffset > 50) {
      document.querySelector(".header").style.backgroundColor = "white";
    } else {
      document.querySelector(".header").style.backgroundColor = "transparent";
    }
  });

  $("a[href='#']").click(function (event) {
    event.preventDefault();
  });

  $('.testimonials__items').slick({
    infinite: true,
    arrows: true,
    dots: true
  });


  $(".dropdown-button").click(function () {
    $(".dropdown").fadeToggle(200);
    $(".dropdown-button span").toggleClass("active");
    $(this).toggleClass("active");
  });

  // ------MOBILE MENU
  $(".toggle_menu").click(function () {
    $(".sandwich").toggleClass("active");
    $(".mobile-menu").slideToggle("fast");
    $(".header").css("background-color", "#fff");
  });
  $(".mobile-menu .dropdown__button").click(function () {
    $(".mobile-menu .dropdown__list").toggleClass("active");
    $(".mobile-menu .arrow").toggleClass("active");
  })
  // --------END MOBILE MENU


  if (document.querySelector(".description")) {
    var tabs = document.querySelector(".description .slider__tabs");
    var tab = document.querySelectorAll(".description .slider__tab");
    var content = document.querySelector(
      ".description .slider__content-wrapper"
    );
    var elems = document.querySelectorAll(".description .slider__content");
    var img = document.querySelectorAll(".description .image__container");
    var imgs = document.querySelector(".description .images");
    var speech = document.querySelector(".description .speech__container");
    var speechItem = document.querySelectorAll(".description .speech");

    for (var i = 0; i < tabs.children.length; i++) {
      (function (index) {
        tabs.children[i].onclick = function () {
          for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove("active");
            img[i].classList.remove("active");
            tab[i].classList.remove("active");
            speechItem[i].classList.remove("active");
          }

          this.classList.add("active");
          content.children[index].classList.add("active");
          imgs.children[index].classList.add("active");
          speech.children[index].classList.add("active");
          speech.classList.remove("active");
          setTimeout(function () {
            speech.classList.add("active");
          }, 400);
        };
      })(i);
    }
  };


  var price = $(".price");
  setTimeout(function () {
    price.each(function (i) {
      var row = $(this);
      setTimeout(function () {
        row.toggleClass('animate');
      }, 500 * i);
    });
  }, 1000);

  function draw(elem) {
    var svgContent = elem.contentDocument;
    var svgPath = svgContent.querySelectorAll("path");
    for (var j = 0; j < svgPath.length; j++) {
      svgPath[j].classList.add("animate");
    }
  }


  setTimeout(function () {
    if (document.querySelector(".advantages")) {

      var list = document.querySelectorAll("object.advantage__img");
      
      $(window).on('scroll', function () {
        for (var i = 0; i < list.length; i++) {
          if ($(window).scrollTop() >= list[i].offsetTop - 400) {
            draw(list[i]);
            var qwww = document.querySelector('.advantage.second .advantage__img').contentDocument; qwww.querySelector(".head").classList.add("animate")
          }
        }
      });
    };
  }, 500);

  setTimeout(function () {
    if (document.querySelector(".pricing-features")) {

      var distance = document.querySelector(".features__items").offsetTop - 700;
      var images = document.querySelectorAll("object.item__img");

      $(window).on("scroll", function () {
        if ($(window).scrollTop() >= distance) {
          for (var i = 0; i < images.length; i++) {
          draw(images[i]);
          }
        }
      });
    };
  }, 500);



  if (document.querySelector(".graph")) {
    var distance2 = $(".graph__container").offset().top - 400;

    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= distance2) {
        $(".graph__img .st1,.graph__img .st0").addClass("animate");
      }
    });
  };

  if (document.querySelector(".contacts")) {
    var distance3 = document.querySelector(".feedback__form").offsetTop - 250;
    var feedbackImg = document.querySelector("object.feedback__img--left");
    var feedbackImg2 = document.querySelector("object.feedback__img--right");

    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= distance3) {
        draw(feedbackImg);
        draw(feedbackImg2)
      }
    });
  };

  if (document.querySelector(".cta")) {
    var distance4 = $(".cta").offset().top - 500;

    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= distance4) {
        var images = $("object.cta__img");
        for (var i = 0; i < images.length; i++) {
          var svgContent = images[i].contentDocument;
          var svgPath = svgContent.querySelectorAll("path");
          for (var j = 0; j < svgPath.length; j++) {
            svgPath[j].classList.add("animate");
          }
        }
        $(window).off("scroll");
      }
    });
  };



  // // ----------------Form functions
  function t(e, t) {
    t
      ? (($("#" + e).disabled = !0), $("#" + e).css("cursor", "default"))
      : (($("#" + e).disabled = !1), $("#" + e).css("cursor", "pointer"));
  };

  function i(e, t) {
    t
      ? $("#" + e).css("visibility", "visible")
      : $("#" + e).css("visibility", "hidden");
  }

  function n(e, t) {
    i("message", e), t && $("#message").html(t);
  }


  $(function () {
    var e = $(".name"),
      t = $(".email"),
      n = $(".message");

    e.blur(function () {
      "" == $(this).val()
        ? $(this).addClass("on-error-js")
        : $(this).hasClass("on-error-js") && $(this).removeClass("on-error-js");
    }),
      t.blur(function () {
        var e = $(this).val(),
          t = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gim;
        t.test(e)
          ? $(this).hasClass("on-error-js") &&
          $(this).removeClass("on-error-js")
          : $(this).addClass("on-error-js");
      }),
      n.blur(function () {
        "" == $(this).val()
          ? $(this).addClass("on-error-js")
          : $(this).hasClass("on-error-js") &&
          $(this).removeClass("on-error-js");
      });
  });

    $('button[type="submit"]').click(function (o) {
      "" == e.val() && e.addClass("on-error-js"),
        "" == t.val() && t.addClass("on-error-js"),
        "" == n.val() && n.addClass("on-error-js"),
        $(".on-error-js").length > 0 && o.preventDefault(),
        $(".success").text("");
    });

  // Form functions

  // $("input, textarea").focus(function () {
  //   $(this)
  //     .parents(".input-effect")
  //     .addClass("focused");
  // });

  // $("input, textarea").blur(function () {
  //   var inputValue = $(this).val();
  //   if (inputValue == "") {
  //     //$(this).removeClass('filled');
  //     $(this)
  //       .parents(".input-effect")
  //       .removeClass("focused");
  //   }
  // });

  //   $('#contactform').submit(function (e) {
  //     contact();
  //     e.preventDefault();
  //   });

  // function contact() {
  //   disable('submitbutton', 1);
  //   hideshow('loading', 1);
  //   message(0);
  //   $.ajax({
  //     type: "POST",
  //     url: "scontact.php",
  //     data: $('#contactform').serialize(),
  //     dataType: "json",
  //     success: function (msg) {
  //       if (parseInt(msg.status) == 1) {
  //         message(1, msg.txt);
  //         $('#name').val('');
  //         $('#email').val('');
  //         $('#messagebox').val('');
  //       } else if (parseInt(msg.status) == 0) {
  //         message(1, msg.txt);
  //       }
  //       hideshow('loading', 0);
  //       disable('submitbutton', 0)
  //     }
  //   });
  // }

  // function disable(el, act) {
  //   if (act) {
  //     $('#' + el).disabled = true;
  //     $('#' + el).css('cursor', 'default');
  //   } else {
  //     $('#' + el).disabled = false;
  //     $('#' + el).css('cursor', 'pointer');
  //   }
  // }

  // function hideshow(el, act) {
  //   if (act) $('#' + el).css('visibility', 'visible');
  //   else $('#' + el).css('visibility', 'hidden');
  // }

  // function message(act, txt) {
  //   hideshow('message', act);
  //   if (txt) $('#message').html(txt);
  // }

});
