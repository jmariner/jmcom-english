$(function() {
	var pageCont = $("#page-container").html();
	$("#page-container").remove();
	$("body").append(pageCont).attr("id","page-container");

	var lastPage = +$(".pf:last-child").attr("data-page-no");
	var pageHeight = $(".h0").height();
	$("#page-container").height((pageHeight+50)*lastPage);

	var widthScale = 1;
	var scale = (window.innerWidth * widthScale) / $(".w0").width();
	$("body").css("transform", "scale("+scale+")");

	document.body.curPage = .95;
	document.body.lastPage = lastPage;

	$(document).keydown(function(e) {
		if (e.which === 37 || e.which === 39) {
			if (e.which === 39 && document.body.curPage < document.body.lastPage) // right - next page
				document.body.curPage++;
			if (e.which === 37 && document.body.curPage > 1) // left - prev page
				document.body.curPage--;
			document.body.scrollTop = $("body").height() * (document.body.curPage-1);
		}
	})
});