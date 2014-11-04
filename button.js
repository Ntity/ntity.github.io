/*
	Directive by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/



var points=0;
$(document).ready(function(){

$("#button").click(function(){
  $(this).css("font-family","");
  points++;
  $('div#pointdisplay').html('You have pointlessly clicked the button   ' +   points    + '   times'); 
}
                );
});