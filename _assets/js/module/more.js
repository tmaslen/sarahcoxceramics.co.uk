!function() {

	$('.js-more-content').each(function () {

		var more = $(this),
		    more_fragment = $('<a href="#" class="more-content__button">More images</a>');

		more_fragment.on('click', function (e) {
			var content_groups = more.find('.js-more-content__group');
			$(content_groups[0]).removeClass('js-more-content__group').removeClass('hide');
			content_groups[0].focus();
			$(content_groups[0]).find('.js-no_replace').removeClass('js-no_replace');
			if (content_groups.length === 1) {
				$(this).remove();
			}
			if (pubsub) {
				pubsub.emitEvent('init_images')
			}
			e.preventDefault();
			return false;
		});

		$(more[0].parentNode).append(more_fragment);

	});

}();