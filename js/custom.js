$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".navbar").addClass("navbar-coloured");
    } else {
        $(".navbar").removeClass("navbar-coloured");
    }
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(".fa").mouseenter(function() {
    $(this).addClass("bounce")
}).mouseleave(function() {
     $(this).removeClass("bounce");
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
        $("#about-me").addClass("fadeInUp");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 800) {
        $(".soundcloud-plugin").addClass("fadeInLeft");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 800) {
        $(".soundcloud-text").addClass("fadeInRight");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1500) {
        $(".fa").addClass("flipInX");
    }
});