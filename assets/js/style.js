$(function() {
	$("nav a." + /^ren\-(.+)$/.exec($("body").attr("data-location"))[1]).addClass("current");
	$("#openNav").click(function() {
		$("header").addClass("navActive");
	});
	$("#closeNav").click(function() {
		$("header").removeClass("navActive");
	});
});