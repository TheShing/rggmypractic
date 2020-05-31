"use strict";

 $(window).on('load', function () {
	//------------------------------------------------------------------------
	//						PRELOADER SCRIPT
	//------------------------------------------------------------------------
	$("#preloader").delay(400).fadeOut("slow", function() {
		AOS.init({
			easing: 'ease-in-out-sine'
		});
});
	$("#preloader .clock").fadeOut();
});

window.addEventListener('load', function() {





			var audio = document.getElementById("audiohtml");
			audio.volume = 0.1;
			
});
