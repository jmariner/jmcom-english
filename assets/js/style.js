$(function() {
	$("nav a." + /^ren\-(.+)$/.exec($("body").attr("data-location"))[1]).addClass("current");
	$("#openNav").click(function() {
		$("header").addClass("navActive");
		return false;
	});
	$("#closeNav").click(function() {
		$("header").removeClass("navActive");
		return false;
	});
	$("body").click(function(){
		$("header").removeClass("navActive");
	});

	$(".md h2, .md h3")
	.attr("id", function(i, old){
		return old.split("-").slice(0, 7).join("-");
	})
	.append(function() {
		return $("<a>")
		.text("¶")
		.addClass("heading-link")
		.attr("href","./#" + $(this).attr("id"));
	});

	$("body[data-location='ren-sources'] .md li").attr("title", function(){
		return $(this).children("a").text();
	});
});