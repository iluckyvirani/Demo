(function($) { 
"use strict"; 
    <!--=========================================back-to-top================================-->
     
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
     
      <!--=========================================back-to-top================================-->
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

/*------------------blog pagination------------------*/
$.fn.pageMe = function(opts){
    var $this = this,
        defaults = {
            perPage: 7,
            showPrevNext: false,
            hidePageNumbers: false
        },
        settings = $.extend(defaults, opts);
    
    var listElement = $this;
    var perPage = settings.perPage; 
    var children = listElement.children();
    var pager = $('.pager');
    
    if (typeof settings.childSelector!="undefined") {
        children = listElement.find(settings.childSelector);
    }
    
    if (typeof settings.pagerSelector!="undefined") {
        pager = $(settings.pagerSelector);
    }
    
    var numItems = children.size();
    var numPages = Math.ceil(numItems/perPage);

    pager.data("curr",0);
    
    if (settings.showPrevNext){
        $('<li><a href="#" class="prev_link in"><i class="fas fa-angle-left"></i></a></li>').appendTo(pager);
    }
    
    var curr = 0;
    while(numPages > curr && (settings.hidePageNumbers==false)){
        $('<li><a href="#" class="page_link in">'+(curr+1)+'</a></li>').appendTo(pager);
        curr++;
    }
    
    if (settings.showPrevNext){
        $('<li><a href="#" class="next_link in"><i class="fas fa-angle-right"></i></a></li>').appendTo(pager);
    }
    
    pager.find('.page_link:first').addClass('active');
    pager.find('.prev_link').hide();
    if (numPages<=1) {
        pager.find('.next_link').hide();
    }
      pager.children().eq(1).addClass("active");
    
    children.hide();
    children.slice(0, perPage).show();
    
    pager.find('li .page_link').click(function(){
        var clickedPage = $(this).html().valueOf()-1;
        goTo(clickedPage,perPage);
        return false;
    });
    pager.find('li .prev_link').click(function(){
        previous();
        return false;
    });
    pager.find('li .next_link').click(function(){
        next();
        return false;
    });
    
    function previous(){
        var goToPage = parseInt(pager.data("curr")) - 1;
        goTo(goToPage);
    }
     
    function next(){
        goToPage = parseInt(pager.data("curr")) + 1;
        goTo(goToPage);
    }
    
    function goTo(page){
        var startAt = page * perPage,
            endOn = startAt + perPage;
        
        children.css('display','none').slice(startAt, endOn).show();
        
        if (page>=1) {
            pager.find('.prev_link').show();
        }
        else {
            pager.find('.prev_link').hide();
        }
        
        if (page<(numPages-1)) {
            pager.find('.next_link').show();
        }
        else {
            pager.find('.next_link').hide();
        }
        
        pager.data("curr",page);
      	pager.children().removeClass("active");
        pager.children().eq(page+1).addClass("active");
    
    }
};

$(document).ready(function(){
    
  $('#myTable').pageMe({pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:4});

    
});
/*------------------blog pagination------------------*/
/*------------------our-case-paginatiom------------------*/

$.fn.pageMe = function(opts){
    var $this = this,
        defaults = {
            perPage: 7,
            showPrevNext: false,
            hidePageNumbers: false
        },
        settings = $.extend(defaults, opts);
    
    var listElement = $this;
    var perPage = settings.perPage; 
    var children = listElement.children();
    var pager = $('.pager');
    
    if (typeof settings.childSelector!="undefined") {
        children = listElement.find(settings.childSelector);
    }
    
    if (typeof settings.pagerSelector!="undefined") {
        pager = $(settings.pagerSelector);
    }
    
    var numItems = children.size();
    var numPages = Math.ceil(numItems/perPage);

    pager.data("curr",0);
    
    if (settings.showPrevNext){
        $('<li class="back-top-top"><a href="#" class="prev_link"><i class="fas fa-angle-left"></i></a></li>').appendTo(pager);
    }
    
    var curr = 0;
    while(numPages > curr && (settings.hidePageNumbers==false)){
        $('<li><a href="#" class="page_link">'+(curr+1)+'</a></li>').appendTo(pager);
        curr++;
    }
    
    if (settings.showPrevNext){
        $('<li><a href="#" class="next_link"><i class="fas fa-angle-right"></i></a></li>').appendTo(pager);
    }
    
    pager.find('.page_link:first').addClass('active');
    pager.find('.prev_link').hide();
    if (numPages<=1) {
        pager.find('.next_link').hide();
    }
      pager.children().eq(1).addClass("active");
    
    children.hide();
    children.slice(0, perPage).show();
    
    pager.find('li .page_link').click(function(){
        var clickedPage = $(this).html().valueOf()-1;
        goTo(clickedPage,perPage);
        return false;
    });
    pager.find('li .prev_link').click(function(){
        previous();
        return false;
    });
    pager.find('li .next_link').click(function(){
        next();
        return false;
    });
    
    function previous(){
        var goToPage = parseInt(pager.data("curr")) - 1;
        goTo(goToPage);
    }
     
    function next(){
        goToPage = parseInt(pager.data("curr")) + 1;
        goTo(goToPage);
    }
    
    function goTo(page){
        var startAt = page * perPage,
            endOn = startAt + perPage;
        
        children.css('display','none').slice(startAt, endOn).show();
        
        if (page>=1) {
            pager.find('.prev_link').show();
        }
        else {
            pager.find('.prev_link').hide();
        }
        
        if (page<(numPages-1)) {
            pager.find('.next_link').show();
        }
        else {
            pager.find('.next_link').hide();
        }
        
        pager.data("curr",page);
      	pager.children().removeClass("active");
        pager.children().eq(page+1).addClass("active");
    
    }
};

$(document).ready(function(){
    
  $('#case-table').pageMe({pagerSelector:'#case',showPrevNext:true,hidePageNumbers:false,perPage:8});

    
});

  /*------------------our-case-paginatiom------------------*/  

/*------------------our-case-paginatiom------------------*/

$.fn.pageMe = function(opts){
    var $this = this,
        defaults = {
            perPage: 7,
            showPrevNext: false,
            hidePageNumbers: false
        },
        settings = $.extend(defaults, opts);
    
    var listElement = $this;
    var perPage = settings.perPage; 
    var children = listElement.children();
    var pager = $('.pager');
    
    if (typeof settings.childSelector!="undefined") {
        children = listElement.find(settings.childSelector);
    }
    
    if (typeof settings.pagerSelector!="undefined") {
        pager = $(settings.pagerSelector);
    }
    
    var numItems = children.size();
    var numPages = Math.ceil(numItems/perPage);

    pager.data("curr",0);
    
    if (settings.showPrevNext){
        $('<li class="back-top-top"><a href="#" class="prev_link"><i class="fas fa-angle-left"></i></a></li>').appendTo(pager);
    }
    
    var curr = 0;
    while(numPages > curr && (settings.hidePageNumbers==false)){
        $('<li><a href="#" class="page_link">'+(curr+1)+'</a></li>').appendTo(pager);
        curr++;
    }
    
    if (settings.showPrevNext){
        $('<li><a href="#" class="next_link"><i class="fas fa-angle-right"></i></a></li>').appendTo(pager);
    }
    
    pager.find('.page_link:first').addClass('active');
    pager.find('.prev_link').hide();
    if (numPages<=1) {
        pager.find('.next_link').hide();
    }
      pager.children().eq(1).addClass("active");
    
    children.hide();
    children.slice(0, perPage).show();
    
    pager.find('li .page_link').click(function(){
        var clickedPage = $(this).html().valueOf()-1;
        goTo(clickedPage,perPage);
        return false;
    });
    pager.find('li .prev_link').click(function(){
        previous();
        return false;
    });
    pager.find('li .next_link').click(function(){
        next();
        return false;
    });
    
    function previous(){
        var goToPage = parseInt(pager.data("curr")) - 1;
        goTo(goToPage);
    }
     
    function next(){
        goToPage = parseInt(pager.data("curr")) + 1;
        goTo(goToPage);
    }
    
    function goTo(page){
        var startAt = page * perPage,
            endOn = startAt + perPage;
        
        children.css('display','none').slice(startAt, endOn).show();
        
        if (page>=1) {
            pager.find('.prev_link').show();
        }
        else {
            pager.find('.prev_link').hide();
        }
        
        if (page<(numPages-1)) {
            pager.find('.next_link').show();
        }
        else {
            pager.find('.next_link').hide();
        }
        
        pager.data("curr",page);
      	pager.children().removeClass("active");
        pager.children().eq(page+1).addClass("active");
    
    }
};

$(document).ready(function(){
    
  $('#shop-table').pageMe({pagerSelector:'#shop',showPrevNext:true,hidePageNumbers:false,perPage:9});

    
});/*----shop-page----*/

$( document ).ready(function () {
		$(".moreBox").slice(0, 3).show();
		if ($(".blogBox:hidden").length != 0) {
			$("#loadMore").show();
		}		
		$("#loadMore").on('click', function (e) {
			e.preventDefault();
			$(".moreBox:hidden").slice(0, 6).slideDown();
			if ($(".moreBox:hidden").length == 0) {
				$("#loadMore").fadeOut('slow');
			}
		});
	});


 $(document).ready(function() {
              $('.owl-test').owlCarousel({
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
                    nav: true
                  },
                  800: {
                    items: 1,
                    nav: false
                  },
                  1200: {
                    items:1,
                    nav: true,
                    loop: false,
                    
                  }
                }
              })
            })
			 $(document).ready(function() {
              $('.owl-client').owlCarousel({
                loop: true,
                margin: 30,
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
                    items:3,
                    nav: true,
                    loop: false,
                    
                  }
                }
              })
            })
			 $(document).ready(function() {
              $('.owl-topic').owlCarousel({
                loop: true,
                margin: 20,
				nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
				  600: {
                    items: 1,
                    nav: true
                  },
                  800: {
                    items: 2,
                    nav: false
                  },
                  1200: {
                    items:2,
                    nav: true,
                    loop: false,
                    
                  }
                }
              })
            })
		/*-contact-toggle-----*/	
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
 /*---shop----*/
/*------------------shop------------------*/




	
/*-------------------------------backtotop-for pagination----------------*/
$(window).scroll(function(){
	if ($(this).scrollTop() > 300) {
      $(".page_link").fadeIn('600');
	}else{
      $(".page_link").fadeOut('700');
	}
});
$(document).ready(function() {
	$(".page_link").on("click", function(){
	   $('html, body').animate({scrollTop: 0}, 'slow');
	});
});

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

  


/*-----------dounut---*/

window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	exportEnabled: true,
	animationEnabled: true,
	title:{
		text: ""
	},
	subtitles: [{
		text: "",
		
	}], 
	
	axisX: {
		title: "",
		
	},
	dataPointMaxWidth: 20,
	axisY: {
		title: "",
		titleFontColor: "#9b9ea8",
		lineColor: "#e9ecef",
		labelFontColor: "#9b9ea8",
		tickColor: "#e9ecef",
		gridColor: "#e9ecef"
		
	},
	axisY2: {
		title: "",
		titleFontColor: "#9b9ea8",
		lineColor: "#e9ecef",
		labelFontColor: "#9b9ea8",
		tickColor: "#e9ecef"
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "column",
		name: "Growth",
		showInLegend: true, 
		yValueFormatString: "#,##0.# k",
		dataPoints: [
			{ label: "Nov’17 ",  y: 100 },                                                                     
			{ label: "Dec’17 ", y: 100 },
			{ label: "Jan’18 ", y: 10 },
			{ label: "Feb’18",  y: 10 },
			{ label: "Mar’18",  y: 10 }
		]
	},
	{
		type: "column",
		name: "Net Income",
		axisYType: "secondary",
		showInLegend: true,
		yValueFormatString: "#,##0.# k",
		dataPoints: [
			{ label: "Nov’17", y: 210.5 },
			{ label: "Dec’17 ", y: 135 },
			{ label: "Jan’18", y: 425 },
			{ label: "Feb’18", y: 130 },
			{ label: "Mar’18", y: 528 }
		]
	}]
});
chart.render();

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	e.chart.render();
}

}

/*-----price-filter--*/
var lowerSlider = document.querySelector('#lower');
var  upperSlider = document.querySelector('#upper');

document.querySelector('#two').value=upperSlider.value;
document.querySelector('#one').value=lowerSlider.value;

var  lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value=this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value=this.value
}; 

})(jQuery);

