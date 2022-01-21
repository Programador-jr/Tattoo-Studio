$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Carregando imagem #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">A imagem #%curr%</a> não pode ser carregado.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Por Daniel Melo</small>';
			}
		}
	});
});
