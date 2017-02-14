// 1st carousel, main
$('.product_image').flickity({
	contain: true,
	wrapAround: true,
	pageDots: true,
	prevNextButtons: false
});
// 2nd carousel, navigation
$('.product_thumbs').flickity({
	asNavFor: '.product_image',
	contain: true,
	pageDots: false
});

$('.product_list').flickity({
	pageDots: false,
	cellAlign: 'left',
	contain: true
});

// $(document).ready(function(){

// 	/** ===========================================
// 		Inititialize Slick sliders
// 	============================================ */
// 	$('.product_thumbs').slick({
// 		arrows: true,
// 		dots: false,
// 		infinite: true,
// 		speed: 800,
// 		slidesToShow: 4,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		autoplaySpeed: 5000,
// 		responsive: [
// 		{
// 			breakpoint: 480,
// 			settings: {
// 				slidesToShow: 2
// 			}
// 		}
// 	  ]
// 	});
	
// 	$('.product_list').slick({
// 		slidesToShow: 4,
// 		slidesToScroll: 1,
// 		responsive: [
// 		{
// 			breakpoint: 768,
// 			settings: {
// 				arrows: false,
// 				centerMode: true,
// 				slidesToShow: 3
// 			}
// 		},
// 		{
// 			breakpoint: 480,
// 			settings: {
// 				arrows: false,
// 				centerMode: true,
// 				slidesToShow: 2
// 			}
// 		}
// 	  ]
// 	});
// });
