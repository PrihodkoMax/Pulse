/* Mobile Menu panel

window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu'),
		menuItem = document.querySelectorAll('.menu_item'),
		hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('menu_active');
		})
	})
}) */

// Slick Slider

// $(document).ready(function () {
// 	$('.carousel__inner').slick({
// 		// dots: true,
// 		infinite: true,
// 		speed: 1000,
// 		slidesToShow: 1,
// 		// adaptiveHeight: true,
// 		prevArrow: '<button type="button" class="slick-prev"><img src="../src/icons/chevron_left.png"></button>',
// 		nextArrow: '<button type="button" class="slick-next"><img src="../src/icons/chevron_right.png"></button>',
// 		responsive: [
// 			{
// 				breakpoint: 992,
// 				settings: {
// 					dots: true,
// 					arrows: false,
// 				}
// 			}
// 		]
// 	});
// });

const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	nav: false,
	speed: 1000,
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev')
});
document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next')
});
