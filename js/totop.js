(function($) { 
  'use strict';

	// When to show the scroll link
	// higher number = scroll link appears further down the page：显示返回顶部的位置
	var upperLimit = 400;
	
	// Our scroll link element
	var scrollElem = $('#gmagon_totop');
   
	// Scroll to top speed：回滚速度
	var scrollSpeed = 300;
   
	// Show and hide the scroll to top link based on scroll position   
	scrollElem.hide();
	$(window).scroll(function () {            
		var scrollTop = $(document).scrollTop();       
		if ( scrollTop > upperLimit ) {
			$(scrollElem).stop().fadeTo(300, 1); // fade back in           
		}else{       
			$(scrollElem).stop().fadeTo(300, 0); // fade out
		}
	});

	// Scroll to top animation on click
	$(scrollElem).click(function(){
		$('html, body').animate({scrollTop:0}, scrollSpeed); return false;
	});
})(jQuery);