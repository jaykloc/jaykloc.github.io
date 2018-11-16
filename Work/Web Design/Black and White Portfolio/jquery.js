$(document).ready(function() {
	$("a.navBtn").click(function(event) {
		event.preventDefault();
		$("HTML, BODY").animate({scrollTop: $($(this).
			attr("href")).offset().top-95}, 1000);
	});
});