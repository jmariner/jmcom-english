$(function() {
	$("nav a." + /^ren\-(.+)$/.exec($("body").attr("data-location"))[1]).addClass("current");
});