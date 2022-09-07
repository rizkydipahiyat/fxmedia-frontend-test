$(() => {
	$("#form-group").hide();
	$("#formSearch").click(function (e) {
		e.preventDefault();
		$("#form-group").toggle();
	});
	$(".owl-carousel").owlCarousel({
		items: 1,
		merge: true,
		loop: true,
		video: true,
		lazyLoad: true,
		center: true,
		responsive: {
			768: {
				items: 1,
			},
			992: {
				items: 1,
			},
		},
	});
});
