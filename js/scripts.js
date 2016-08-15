$(document).ready(function()
{
	// var anchors = ['homepage', 'aboutmepage', 'aboutmepage', 'aboutmepage', 'aboutmepage', 'skillspage','careerpage', 'freelancingpage', 'contactmepage'];
	$('#fullpage').fullpage({
					// sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
					anchors: ['homepage', 'aboutmepage', 'schoolpage', 'learningpage', 'moonpage	', 'skillspage','careerpage','goodwordpage','freelancingpage', 'contactmepage'],
					menu: '#menu',
					onLeave: function(index, nextIndex, direction){
						var leavingSection = $(this);
			            //after leaving section 2

			            // console.log( $('.fp-section').eq(nextIndex - 1 ).attr('data-anchor') );
			            checkAnimation( $('.fp-section').eq(nextIndex - 1 ).attr('data-anchor') );
			            // if(index == 5 && direction =='down'){
			            //     checkAnimation();
			            // }
			            // if(index == 5 && direction =='up'){
			            //     checkAnimation();
			            // }
			            

			            // changeNav(nextIndex);
					},
					afterLoad: function(anchorLink, index)
					{
						 
			            checkAnimation(anchorLink);
			            
					},
					scrollingSpeed: 500,
					verticalCentered:false,
					navigation: false,
					navigationPosition: 'right',
					navigationTooltips: ['Home', 'About Me','About Me','About Me','About Me', 'Skills', 'Career Background', 'Freelancing', 'Contact Me'],
					continuousHorizontal: true
				});

	$("a.photoslide").click(function()
	{
		$("a.photoslide").removeClass("selected");
		if ($(this).hasClass("selected"))
		{
			// $(this).removeClass(" selected");
		}
		else
		{
			$(this).addClass("selected");
		}
		$("#caption").html($(this).attr('data-caption'));

		$("a.first img").removeClass("firstnotselected");	
	});
	$('#frmMsg').submit(function () {
		alert('test');
	 sendContactForm();
	 return false;
	});
	$("a.photoslide.last").click(function()
	{
		$("a.first img").addClass("firstnotselected");
	});

});

function displayNextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
  document.getElementById("schoolimg").src = "img/" + images[x] + ".jpg";
  // document.getElementById(images[0]).style.opacity="0";
  // document.getElementById(images[1]).style.opacity="0";
  // document.getElementById(images[2]).style.opacity="0";
  // document.getElementById(images[3]).style.opacity="0";
  // document.getElementById(images[4]).style.opacity="0";
  // document.getElementById(images[5]).style.opacity="0";
  // document.getElementById(images[x]).style.opacity="1"
}

function moveMoon()
{
	var backgroundPos = $("#moon").css('backgroundPosition').split(" ");
	var xPos = backgroundPos[0];
	xPos = xPos.substring(0, xPos.length-1) - 1;
	if(xPos<0)
	{
		xPos=100;
	}
	yPos=0;
	document.getElementById("moon").style.backgroundPosition = xPos + "% " + yPos +"%";
}

function startTimer() {
  setInterval(displayNextImage, 1500);
  // setInterval(moveMoon, 1000);
}

var images = [], x = -1;
images[0] = "mead1";
images[1] = "mead2";
images[2] = "mead3";
images[3] = "mead4";
images[4] = "mead5";
images[5] = "mead6";

// Returns true if the specified element has been scrolled into the viewport.
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation(anchorLink) {

	if (anchorLink == 'skillspage')
	{
		var $elem = $('.skill-level');
		if ($elem.hasClass('start')) return;
		$elem.addClass('start');
	}
	else if (anchorLink == 'homepage')
	{

		var $elem = $('#home .characteristics');
		if ($elem.hasClass('start')) return;
		$elem.addClass('start');
	}
	else if (anchorLink == 'careerpage')
	{

		var $elem = $('#work .careerphoto');
		if ($elem.hasClass('start')) return;
		$elem.addClass('start');
	}
	else if (anchorLink == 'aboutmepage')
	{

		var $elem = $('.fly');
		if ($elem.hasClass('start')) return;
		$elem.addClass('start');
			
	}
	else if (anchorLink == 'schoolpage')
	{
		var $elem = $('#encapsulate');
		if ($elem.hasClass('start')) return;
		$elem.addClass('start');
		
		var $elem = $('#smart');
		if ($elem.hasClass('start')) return;
		$elem.addClass('start');
		
		var $elem = $('#teamplayer');
		if ($elem.hasClass('start')) return;
		$elem.addClass('start');
		
		var $elem = $('#tup');
		if ($elem.hasClass('start')) return;
		$elem.addClass('start');
		
		var $elem = $('#downloadresume');
		if ($elem.hasClass('start')) return;
		$elem.addClass('start');
	}
	else if (anchorLink == 'learningpage')
	{
		var $elem = $('#learningispassion');
		if ($elem.hasClass('start')) return;
		$elem.addClass('start');
		
		var $elem = $('#programming');
		if ($elem.hasClass('start')) return;
		$elem.addClass('start');
	}
		

}
function changeNav(nextIndex)
{
	
	var $nav = $('.navbar');
	if (nextIndex==1)
		$nav.css('background-color', 'rgba(0,0,0,0.8)');
	else if (nextIndex==2)
		$nav.css('background-color', 'rgba(0,0,0,0)');
}

// Capture scroll events
// $(window).scroll(function(){
//     checkAnimation();
// });