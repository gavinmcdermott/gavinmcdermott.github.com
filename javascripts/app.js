$(function (){

	$('.sideBlock').mouseover(function(){
		$('.intro').addClass('red');
		$('.footer').addClass('hidden');
	}).mouseout(function() {
		$('.intro').removeClass('red');
		$('.footer').removeClass('hidden');
	});

});