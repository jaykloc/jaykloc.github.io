$(document).ready(function() {
	$("a.scrollLink").click(function(event) {
		event.preventDefault();
		$("HTML, BODY").animate({scrollTop: $($(this).
			attr("href")).offset().top }, 500);
	});
});