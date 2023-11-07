 (function($) { 
"use strict"; 
 <!-- back-to-top script -->
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
   
 <!-- back-to-top script -->
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
					 gridheight:[750,880,880,750],
                    					
                     
                                        /* basic navigation arrows and bullets */
                                        navigation: {
                     
                                            /*arrows: {
                                                enable: true,
                                                style: "hesperiden",
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

$(document).ready(function ()
 
 {
 
  $("#watch-me").click(function()

  {
    $("#show-me:hidden").show('slow');

   $("#show-me-two").hide();

   $("#show-me-three").hide();

   });

   $("#watch-me").click(function()

  {

    if($('watch-me').prop('checked')===false)

   {

    $('#show-me').hide();

   }

  });
 
  $("#see-me").click(function()
  {
    $("#show-me-two:hidden").show('slow');
   $("#show-me").hide();
   $("#show-me-three").hide();
   });
   $("#see-me").click(function()
  {
    if($('see-me-two').prop('checked')===false)
   {
    $('#show-me-two').hide();
   }
  });
  
  $("#look-me").click(function()
  {
    $("#show-me-three:hidden").show('slow');
   $("#show-me").hide();
   $("#show-me-two").hide();
   });
   $("#look-me").click(function()
  {
    if($('see-me-three').prop('checked')===false)
   {
    $('#show-me-three').hide();
   }
  });
  
 });
 
 
 

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
              $('.owl-service').owlCarousel({
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
				  500: {
                    items: 2,
                    nav: true
                  },
                  900: {
                    items: 3,
                    nav: false
                  },
                  1200: {
                    items: 3,
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
                    margin: 30
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

})(jQuery);