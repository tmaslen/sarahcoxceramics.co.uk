!function() {

	var ClickToZoom = function () {
		
		this.elm = $('<div class="click-to-zoom__modal hide">' +
			'<a href="#" class="click-to-zoom__close-button"><span>&times;</span></a>' +
			'<div class="click-to-zoom__img-holder image--stretch"></div>' +
		'</div>');

		this.imgHolder = this.elm.find('.click-to-zoom__img-holder');

		var clickToZoom = this;
		this.elm.find('.click-to-zoom__close-button').on('click', function (e) {
			clickToZoom.elm.addClass('hide');
			if (clickToZoom.elmToReturnTo) {
				clickToZoom.elmToReturnTo.focus();
			}
			e.preventDefault();
			return false;
		});

		this.showImage = function (imgElm) {
			this.elm.removeClass('hide');
			this.imgHolder.html('<img src="' + imgElm.src + '" class="img js-image_replace" />');
			this.elm.find('.click-to-zoom__close-button')[0].focus();
			this.elmToReturnTo = imgElm;
			if (pubsub) {
				pubsub.emitEvent('resize_images')
			}
		}

		$('body').append(this.elm); 
	}

	var myClickToZoom = new ClickToZoom();


	$('body').on('click', function (e) {

		var elm = $(e.target);
		if (
			(elm[0].nodeName == "IMG") &&
			(!elm.hasClass('click-to-zoom__no'))
		) {
			elm[0].tabIndex = 0;
			myClickToZoom.showImage(elm[0]);
		}

	});

}();