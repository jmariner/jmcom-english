$(function() {
	$("nav a." + $("body").attr("data-location").replace("ren-","")).addClass("current");
});