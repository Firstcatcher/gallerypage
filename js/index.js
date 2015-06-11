$(document).ready(function() {

    $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                // centerMode: true,

            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
                infinite: true,

            }


        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    });


});