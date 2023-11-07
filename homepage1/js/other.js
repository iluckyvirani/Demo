(function($) { 
"use strict"; 
// JavaScript Document
  /*-----------------------back-to-top-------------*/
$(window).scroll(function(){
	if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn('600');
	}else{
      $(".back-to-top").fadeOut('700');
	}
});
$(document).ready(function() {
	$(".back-to-top").on("click", function(){
	   $('html, body').animate({scrollTop: 0}, 'slow');
	});
});
  /*-----------------------back-to-top-------------*/

/*revolution-setting-js--------------------------*/

            /* https://learn.jquery.com/using-jquery-core/document-ready/ */
            jQuery(document).ready(function() {
 
                /* initialize the slider based on the Slider's ID attribute from the wrapper above */
                jQuery('#rev_slider_1').show().revolution({
					 parallax: {
        type: 'mouse+scroll',
        origo: 'slidercenter',
        speed: 400,
        levels: [5,10,15,20,25,30,35,40,
                 45,46,47,48,49,50,51,55],
        disable_onmobile: 'on'
    },
 
                    /* options are 'auto', 'fullwidth' or 'fullscreen' */
                    sliderLayout: 'auto',
					   /* RESPECT ASPECT RATIO */
                    minHeight: '500',
					responsiveLevels:[1170,1024,778,480],
			visibilityLevels:[1170,1024,778,480],
			gridwidth:[1170,1024,778,480],
			gridheight:[775,768,860,720],
 
                    /* basic navigation arrows and bullets */
 
                    /* basic navigation arrows and bullets */
                    navigation: {
                     /*
                        arrows: {
                            enable: true,
                            style: "zeus",
                            hide_onleave: false
                        },*/
						 bullets: {
                                    enable: true,
                                    hide_onmobile: false,
                                    style: "uranus",
                                    hide_onleave: false,
                                    direction: "vertical",
                                    h_align: "right",
                                    v_align: "center",
                                    h_offset: 30,
                                    v_offset: 0,
                                    space: 12,
                                    tmp: '<span class="tp-bullet-inner"></span>'
                                },
 
                        
                    }
                });
            });
			
/*revolution-setting-js--------------------------*/

 // Counter 
 $('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration:5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

        

         
			 $(document).ready(function() {
              $('.owl-client').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,

                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: false
                  },
                  992: {
                    items: 2,
                    nav: true,
                    loop: false,
                    margin: 20
                  }
                }
              })
            })
			
			 $(document).ready(function() {
              $('.owl-logo').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,

                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 4,
                    nav: false
                  },
                  1000: {
                    items: 6,
                    nav: true,
                    loop: false,
                    margin: 20
                  }
                }
              })
            })
/*-----------------------owl-log-carousel-------------*/
$(document).ready(function() {
    $('#owl-carousel').carousel({
        interval: 3000
    })
});

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });
  
  /*-----------------------owl-log-carousel-------------*/


  
  	 /*-----------------------contact-form-------------*/
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				optselect: {
					required: true
				},
				firstname: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}  	 /*-----------------------contact-form-------------*/
	

	
})(jQuery);	



  	