$(document).ready(function(){
  $('.partner').slick({
    dots: true,
	  infinite: true,
<<<<<<< HEAD
	  arrows: false,
	  responsive:true,
	  centerPadding: '60px',
=======
>>>>>>> origin/master
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
  });
<<<<<<< HEAD
});

$(document).ready(function(){
  $('.sliderFon').slick({
    dots: true,
	  infinite: false,
	  arrows: false,
	  autoplay: true,
  	autoplaySpeed: 5000,
  	speed: 500,
	  fade: true,
	  cssEase: 'linear',
	  adaptiveHeight: true,
	  responsive: [
	  	{
	      breakpoint: 1920,
	      settings: {
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 1366,
	      settings: {
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 1200,
	      settings: {
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 1024,
	      settings: {
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {

	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {

	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
  });
=======
>>>>>>> origin/master
});