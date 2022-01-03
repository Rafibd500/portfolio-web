
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
      loop:true,
});
// type 
// for animation 
AOS.init();
// for animation 

// about progress bar start

$('#wp').LineProgressbar({

  percentage: 95, // 95%
  duration:2000,

});
$('#css').LineProgressbar({

  percentage: 85, // 85%
  duration:2000,


});
$('#html').LineProgressbar({

  percentage: 95, // 95%
  duration:2000,


});
$('#graphics').LineProgressbar({

  percentage: 85, // 85%
  duration:2000,


});

// about progress bar end