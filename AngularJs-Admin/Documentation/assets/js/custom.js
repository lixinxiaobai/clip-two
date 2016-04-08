'use strict';
jQuery(document).ready(function() {
	$(document).scrollTo(0);
	$('.main-navigation-menu > li a').on('click', function(e){
		$('.main-navigation-menu > li').removeClass('active');
		$(this).parent().addClass('active');
		$(document).scrollTo($(this).attr('href'), 500);
		e.preventDefault();
	});
	
});