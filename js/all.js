wow = new WOW({
	animateClass: 'animated',
});
wow.init();

$('.menu-btn').click(function (e) {
	e.preventDefault();
	$('.line1,.line2,.line3,.mb-menu').toggleClass('open')
});

$(function () {
	$('#go-to-top').click(function () {
	  $('html,body').animate({ scrollTop: 0 }, 333);
	});
	$(window).scroll(function () {
	  if ($(this).scrollTop() > 300) {
		$('#go-to-top').fadeIn(222);
	  } else {
		$('#go-to-top').stop().fadeOut(222);
	  }
	}).scroll();
  });
