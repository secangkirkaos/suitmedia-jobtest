(function($){

"use strict";

$(document).ready(function() {

	//Back-to-top Button
	$(window).scroll(function(e) {

        if($(window).scrollTop() > 150){
	        $(".back-to-top").addClass('active');
	    }
	    else {
	    	$(".back-to-top").removeClass('active');
	    }
	});
	$(".back-to-top").click(function(event) {
		event.preventDefault();

		$(window).scrollTo(0, 1500, {easing:'easeOutExpo'});
	});


/*==========================================================================================================================================
/*==========================================================================================================================================
	Color Mode Switcher
============================================================================================================================================
============================================================================================================================================*/


	$(".color-pallets a").click(function(event) {
	    event.preventDefault();

	    var style_color = $(this).attr('data-color');
	    var wanted_color = "style-" + style_color;

	    $(".color-pallets a").removeClass('current');
	    $(this).addClass('current');

	    $("#"+wanted_color).remove();
	    $("#main-style").before('<link id="'+wanted_color+'" type="text/css" rel="stylesheet" href="css/color-'+style_color+'.css">');

	});


/*==========================================================================================================================================
/*==========================================================================================================================================
	Validate Form
============================================================================================================================================
============================================================================================================================================*/

	function validate() {
	    var errorNode = this.parentNode.querySelector( ".error" ),
	        span = document.createElement( "span" )

	    this.classList.remove( "invalid" );
	    if ( errorNode ) {
	        errorNode.parentNode.removeChild( errorNode );
	    }

	    if ( !this.validity.valid ) {
	        this.classList.add( "invalid" );
	        this.parentNode.appendChild( span );
	        span.classList.add( "error" );
	        span.innerHTML = this.getAttribute(
	            this.validity.valueMissing ? "data-required-message" : "data-type-message" );
	    }
	};

	var form = document.querySelector( "form" ),
		textnya = form.querySelectorAll( "textarea" ),
	    inputs = form.querySelectorAll( "input" );

	for ( var i = 0; i < inputs.length; i++ ) {
	    inputs[ i ].addEventListener( "blur", validate );
	    inputs[ i ].addEventListener( "invalid", validate );
	};

	for ( var t = 0; t < textnya.length; t++ ) {
	    textnya[ t ].addEventListener( "blur", validate );
	    textnya[ t ].addEventListener( "invalid", validate );
	};

	form.addEventListener( "invalid", function( event ) {
	    event.preventDefault();
	}, true );

	document.querySelector( "form" ).addEventListener( "submit", function( event ) {
	    if ( this.checkValidity() ) {
	        alert( "Successful submission" );
	    } else {
	        event.preventDefault();
	    }
	});

}); //document ready


})(jQuery);
