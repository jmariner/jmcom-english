$(function() {
	var pageCont = $("#page-container").html();
	$("#page-container").remove();
	$("body").append(pageCont).attr("id","page-container");

	var pageHeight = $(".h0").height();
	$("#page-container").height(pageHeight * 2 + 100);

	var scale = (window.innerWidth * 0.95) / $(".w0").width();
	$("body").css("transform", "scale("+scale+")");

	$("body").attr("cur-page", "1");

	document.body.curPage = 1;
	document.body.lastPage = +$(".pf:last-child").attr("data-page-no");

	$(document).keydown(function(e) {
		if (e.which === 39) { // right - next page
			// inc page if < lastpage
			//document.body.scrollTop = $("body").height() * pagenum-1
		}
		if (e.which === 37) { // left - prev page
			// dec page if > 1
		}
	})
});