$(document).ready(function () {

    var $anchors = $('a[href^="#"]').not('[href="#"]');

    $anchors.click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 500);
    });

    $('.slickslider').slick({
        autoplay: true,
        infinite: true,
        variableWidth: true,
        arrows: true,
        mobileFirst: true,
        speed: 500,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        //fade: true,
        //cssEase: 'linear',


    });

   // var $isotopeGrid = $('.portfolio-images');

    //$isotopeGrid.isotope({
    //    itemSelector: '.img-wrapper',
    //    percentPosition: true
    //});

    //$('.portfolio .filters button').click(function () {
    //    var filterValue = $(this).data('filter');

    //    $isotopeGrid.isotope({
    //        filter: filterValue
    //    });
    //});
});