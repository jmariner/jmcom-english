$(function() {
	onResize();

	var loc = $("body").attr("data-location");
	$("nav ." + /^portfolio\-(.+)$/.exec(loc)[1]).addClass("current");

	$(".md a:not(.heading-link)").attr("target", function() {
		return (this.hostname !== window.location.hostname) ? "_blank" : undefined;
	});

	var $dubViewer = $("main .md div.double-viewer");
	var $first = $("<div>").addClass("first").text($dubViewer.find("iframe:nth-of-type(1)").text())
		.click(function() { $dubViewer.attr("data-which", "first"); });

	var $second = $("<div>").addClass("second").text($dubViewer.find("iframe:nth-of-type(2)").text())
		.click(function() { $dubViewer.attr("data-which", "second"); })
		.one("click", function() { $dubViewer.find("iframe:nth-of-type(2)")[0].contentWindow.location.reload(); });

	$dubViewer.prepend($("<nav>").append($first).append($second)).attr("data-which", "first");

	window.onresize = onResize;
});

function onResize() {
	$("iframe.autofit").height(function() {
		return $(this).width() * (11/8.5);
	});

	$("div.double-viewer iframe.autofit").height(function() {
		return $(this).parent().width() * (11/8.5);
	});

	if ($(document).width() >= 1080) {}
}