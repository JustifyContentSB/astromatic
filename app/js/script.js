$('.result__slider').slick({
    slidesToShow: 'auto',
    responsive: [{
        breakpoint: 1279,
        settings: {
            slidesToShow: 1,
            dots: true,
            infinite: true,
            speed: 300,
            fade: true,
            cssEase: 'linear',
        }
    }]
});