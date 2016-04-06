$(function() {
	var loc = $("body").attr("data-location");
	$("nav a." + /^portfolio\-(.+)$/.exec(loc)[1]).addClass("current");

	onResize();
	window.onresize = onResize;
});

function onResize() {
	$("iframe.autofit").height(function() {
		return $(this).width() * (11/8.5);
	});
}