(function($) {
	
	"use strict";


    // Back to top
    $.scrollUp({
        scrollText: '<img src="assets/images/to-top.png">',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


    

    //js code for mobile menu toggle
   $(".menu-toggle").on("click", function() {
       $(this).toggleClass("is-active");
   });

   


        
     //portfolio filtering

    var $portfolio = $('.portfolio');
    if ($.fn.imagesLoaded && $portfolio.length > 0) {
        imagesLoaded($portfolio, function () {
            $portfolio.isotope({
                itemSelector: '.portfolio-item',
                filter: '*'
            });
            $(window).trigger("resize");
        });
    }

    $('.portfolio-filter').on('click', 'a', function (e) {
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
        var filterValue = $(this).attr('data-filter');
        $portfolio.isotope({filter: filterValue});
    });

    
     // Portfolio popup

    $(".portfolio-gallery").each(function () {
        $(this).find(".popup-gallery").magnificPopup({
            type: "image",
            gallery: {
                enabled: true
            }
        });
    }); 

    $('.video-popup').magnificPopup({
        type: 'iframe',
    });


    //Wow js active
    new WOW().init();   


    // Preloader Js
    $(window).on('load', function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    

    // Partner Slider
    $('.single-partners').owlCarousel({
        loop:true,
        dots: false,
        autoplay: true,
        margin:30,
        smartSpeed: 1500,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });



    



    

	
})(jQuery);