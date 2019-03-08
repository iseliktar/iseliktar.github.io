$(function () {
	// $( '.js-float-label-wrapper').FloatLabel();

	//smooth scroll on click on nav item
	$('.nav').onePageNav({
		changeHash: true,
		filter: ':not(.facebook-icon)',
		scrollChange: function($currentListItem) {
			var newHash = $currentListItem.find('a').attr('href');
			if(history.pushState) {
				history.pushState(null, null, newHash);
			}
		}
	});

	var navMain = $(".navbar-collapse"); // avoid dependency on #id
	// "a:not([data-toggle])" - to avoid issues caused
	// when you have dropdown inside navbar
	navMain.on("click", "a:not([data-toggle])", null, function () {
		navMain.collapse('hide');
	});
});