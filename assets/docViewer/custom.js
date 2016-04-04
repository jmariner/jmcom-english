$(function() {
	var pageCont = $("#page-container").html();
	$("#page-container").remove();
	$("body").append(pageCont).attr("id","page-container");

	var lastPage = +$(".pf:last-child").attr("data-page-no");
	$(".pf").attr("data-last-page", lastPage);
	var pageHeight = $(".h0").height();
	$("body").height((pageHeight+25)*lastPage);

	var widthScale = 1;
	var scale = (window.innerWidth * widthScale) / $(".w0").width();
	$("body").css("transform", "scale("+scale+")");

	document.body.curPage = 1;
	document.body.lastPage = lastPage;

	var $pageNav = $("<div>").addClass("page-nav")
	.append($("<div>").addClass("prev").text("Prev").click(prevPage))
	.append($("<div>").addClass("next").text("Next").click(nextPage));

	$(".pf")
	.append($pageNav.clone(true).addClass("top"))
	.append($pageNav.clone(true).addClass("bottom"));

	if (window.self !== window.top) {// if in an iframe
		$(".pf").append($("<a>").addClass("fullscreen").text("Fullscreen").attr("href", document.location.href).attr("target", "_blank"));
	}

	$(document).keydown(function(e) {
		if (e.which === 38 || e.which === 40) {
			if (e.which === 40 && document.body.curPage < document.body.lastPage) // right - next page
				nextPage();
			if (e.which === 38 && document.body.curPage > 1) // left - prev page
				prevPage();
		}
	});
});

function prevPage() {
	if (document.body.curPage > 1) scrollToPage(--document.body.curPage);
}

function nextPage() {
	if (document.body.curPage < document.body.lastPage) scrollToPage(++document.body.curPage);
}

function scrollToPage(p) {
	var $p = $(".pf[data-page-no="+p+"]");
	if ($p.length === 1)
		document.body.scrollTop = $p.offset().top
}