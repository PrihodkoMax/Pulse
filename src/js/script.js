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

(function ($) {
	$(function () {

		$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
			$(this)
				.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
				.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
		});
	});


})(jQuery);

function toggleSlide(item) {
	$(item).each(function (i) {
		$(this).on('click', function (e) {
			e.preventDefault();
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		})
	});
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');