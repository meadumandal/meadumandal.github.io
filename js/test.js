// for example, gusto kong i-animate itong h1.... gsto ko mag-appear mula sa left sya... lalagyan ko sya ng class na 'animatedelement' -->
<h1 class="intro animatedelement"> Hello there I am Mead! </h1>

// then tru CSS ilalagay ko ung animation
.intro
{
	-webkit-transform: translateX(-110%);  //immove ko sya pa-kaliwa until mawala sa view (that's why negative)
}
.intro.start
{
	animation: fly 0.1s linear forwards;
	animation-delay:0.5s;
}
@keyframes fly
{
	0%   { -webkit-transform: translateX(-100%); }
 	100% { -webkit-transform: translateX(0%); }
}

//JAVASCRIPT or JQuery part:

$(document).ready(function() //see $(document.ready) explanation below
{
	//$(document.ready) explanation:
	//ibig sabihin nito, aantayin muna mtapos ung loading ng buong HTML document, before iexecute ung javascript functions...
	//kasi need muna maload ung buong document to properly execute javascript

	var $animation_elements = $('.animatedelement'); //save all html elements with class 'animatedelements' to a variable (to use later)
	var $window = $(window); //save the whole window object to a variable, (to use later)

	function animate() {
	  var window_height = $window.height(); //get window height
	  var window_top_position = $window.scrollTop(); //get the top position of the window
	  var window_bottom_position = (window_top_position + window_height); //get the bottom position of the window

	  //for example, this is your window/screen:
	  // ---------------------------- ->this is the window_top_position     }
	  // |							|										}
	  // |							|										} -> this is the window_height
	  // |							|										}
	  // |							|										}
	  // ---------------------------- ->this is the window_bottom_position	}


	  $.each($animation_elements, function() { // for each html element with class 'animatedelement', js will execute this commands
	    var $element = $(this); // get the element and save to variable
	    var element_height = $element.outerHeight(); //get element's height
	    var element_top_position = $element.offset().top; // get the element's top position
	    var element_bottom_position = (element_top_position + element_height); // get the element's bottom position

	    if ((element_bottom_position >= window_top_position) && //if element's bottom is greater than the window's top
	      (element_top_position <= window_bottom_position)) { // and if element's top is lesser than the window's bottom, 
	      $element.addClass('start');						// that means, the element is in view, so add the class start (which will trigger the animation)
	    } else {
	      $element.removeClass('start');					// otherwise, the element is not in view, so remove the class start (which will remove the animation)
	    }
	  });
	}

	$window.on('scroll resize', animate); // ibig sabihin nito, ni-link niya yung function ANIMATE to scroll and resize events
	//so every time na magsscroll or magrresize si user, mageexecute ung function animate
	$window.trigger('scroll');		// trigger scroll event upon loading of html

});