// sticky header start
$(function () {
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 200) {
      $(".navbar").addClass("bg");
    } else {
      $(".navbar").removeClass("bg");
    }
  });
});
// sticky header end

// type 
var typed = new Typed('.type', {
  strings: [
    'Web Designer',
    'Web Developer',
    'Wordpress Expert'
  ],
  typeSpeed: 100,
  loop: true,
});
// type 


// about progress bar start

$(function () {
  $(window).scroll(function () {
    $('#wp').LineProgressbar({

      percentage: 95, // 95%
      duration: 2000,

    });
    $('#css').LineProgressbar({

      percentage: 85, // 85%
      duration: 2000,


    });
    $('#html').LineProgressbar({

      percentage: 95, // 95%
      duration: 2000,


    });
    $('#graphics').LineProgressbar({

      percentage: 85, // 85%
      duration: 2000,


    });
  });
});
// about progress bar end

// work venobox satrt
new VenoBox({
  selctor: '.venobox'
});
// work venobox end


// testimonial part start
$('.testimonial-item-part').slick({
  dots: true,
  infinite: true,
  speed: 300,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 991.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// testimonial part end 

// counter part start
jQuery(document).ready(function ($) {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});
// counter part end

// blog part start
$('.blog-item-part').slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// blog part end 

// scrollspy part start
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 50
            }, 1500);
            return false;
        }
    }
}); 
// scrollspy part end