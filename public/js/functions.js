$(document).ready(function () {
	$('#fullpage').fullpage({
		//anchors:['principal', 'features', 'sobre', 'parcerias', 'aplicativo', 'menu']
		sectionsColor: ['#FFFFFF', '#006C9B', '#D8E0E6', '#FFFFFF', '#cccccc', '#006C9B'],

		// Navegação da página
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['principal', 'features', 'sobre', 'parcerias', 'aplicativo', 'menu'],

		// Navegação dos Sliders
		slidesNavigation: true,
		slidesNavPosition: 'bottom',

		// AutoPlay no Slider
		afterRender: function () {
			setInterval(function () {
				$.fn.fullpage.moveSlideRight();
			}, 5000);
		}
	});

	$(".button a").click(function () {
		$(".overlay").fadeToggle(200);
		$(this).toggleClass('btn-open').toggleClass('btn-close');
	});
});

$('.overlay').on('click', function () {
	$(".overlay").fadeToggle(200);
	$(".button a").toggleClass('btn-open').toggleClass('btn-close');
	open = false;
});