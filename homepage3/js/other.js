(function($) { 
"use strict"; 

/*--back-to-top---*/  $(window).scroll(function(){
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

<!-- Slider's main "init" script -->
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
					 gridheight:[750,700,650,600],
 
                    /* basic navigation arrows and bullets */
                    navigation: {
 
                        arrows: {
                            enable: true,
                            style: "hesperiden",
                            hide_onleave: false
                        },
 
                        bullets: {
                            enable: true,
                            style: "hesperiden",
                            hide_onleave: false,
                            h_align: "center",
                            v_align: "bottom",
                            h_offset: 0,
                            v_offset: 20,
                            space: 15
 
                        }
                    }
                });
            });
// JavaScript Document
 
 

 $(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

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
              $('.clients-carousel').owlCarousel({
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
                    items: 2,
                    nav: true
                  },
				  800: {
                    items: 3,
                    nav: false
                  },
                  1200: {
                    items: 4,
                    nav: false
                  },
                  1400: {
                    items: 5,
                    nav: true,
                    loop: false,
                    
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
			
			  
  	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
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
	}

/*--end-of-document--*/
})(jQuery);