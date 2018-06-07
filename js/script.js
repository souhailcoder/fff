(function ($) {
    "use strict";



        //banner Slider
    
        $('.carousel-banner-slides').owlCarousel({
            
            loop:true,
            items:1,
            nav:true,
            autoplayHoverPause:true,
            autoplay: true,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                }
            }
        });
	
	   //service Slider
    
        $('.carousel-service').owlCarousel({
            
            loop:true,
            items:4,
            nav:true,
            autoplayHoverPause:true,
            autoplay: true,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:2
                },
                1024:{
                    items:3
                },
                1100:{
                    items:4
                }
            }
        });

	   //testimonial Slider
    
        $('.carousel-testimonial').owlCarousel({
            
            loop:true,
            items:1,
            nav:true,
            autoplayHoverPause:true,
            autoplay: true,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                }
            }
        }); 


//smooth scrool

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



})(window.jQuery);	
    		