$(function() {
	var loc = $("body").attr("data-location");
	$("nav a." + /^ren\-(.+)$/.exec(loc)[1]).addClass("current");

	if (document.innerWidth < 1080) {
		$("body[data-location='ren-home'] main .outer").on("click", "a:not(.tapped)", onTap);

		var onTap = function() {
			$(this).addClass("tapped");
			return false;
		}
	}
});