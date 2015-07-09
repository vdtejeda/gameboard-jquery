var main = function() {
	// when we 'click' on the '.more-btn' element...
	$(".more-btn").on('click', function( e ) {
		// .. prevent the lnk from taking us anywhere
		e.preventDefault();
		$(this).next().toggle();
	});
	$(".share").on('click', function() {
		$(this).next().toggle();
	});
	$(".bell").click(function(){
		$(this).find('.notification').toggleClass('active');
	});
};

$(document).ready(main);