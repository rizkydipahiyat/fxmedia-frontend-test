$(() => {
	$(".detail-Info").slice(0, 2).show();
	$(".load-more").click(function (e) {
		e.preventDefault();
		$(".detail-Info:hidden").slice(0, 2).slideDown();
	});
});
