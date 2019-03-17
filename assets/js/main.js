$(function () {
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

	var navMain = $('.navbar-collapse');
	navMain.on('click', 'a:not([data-toggle])', null, function () {
		navMain.collapse('hide');
	});
});