$(function() {
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
		return old.replace(/[^a-zA-Z0-9\-]/g, "").split("-").slice(0, 7).join("-");
	})
	.append(function() {
		return $("<a>")
		.text("¶")
		.addClass("heading-link")
		.attr("href","./#" + $(this).attr("id"));
	});
});