$(document).ready(function() {

	$("#testimonials").owlCarousel({
        singleItem: true,
        pagination: true,
        navigation: false,
        autoPlay: 10000
    });

	$(window).scroll(function() {
		if ($(this).scrollTop() > 600) {
			$('.js.menu').addClass('fixed');
		} else {
			$('.js.menu').removeClass('fixed');
		}
	}); 

	// Enable smooth scrolling on all links with anchors 
	$(".nav-main li a[href^='#'], #arrow a[href^='#'], #logo a").on('click', function(e) {

		var hash = this.hash;

		e.preventDefault();
	  
		$('html, body').animate({
		    scrollTop: $(hash).offset().top -50
		  }, 400, function() {

	  	// when done, add hash to url
    	// (default click behaviour)
	    window.location.hash = hash;
	  	});
	});

	$('.nav-toggle').click(function(){
		$('.nav-toggle').toggleClass('on');
	});

	$('.vid').hide();
	$('.button-play').click(function() {
		$('.video').css('background', 'none');
		$('.button-play').hide();
		$('.vid').show();
	});
});