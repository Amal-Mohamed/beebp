jQuery(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if ($('.nav').length > 0) {
            if (scroll > 10 && $(document).width() > 767) {
                $('.navbar').addClass('nav-bg');
            }
            else {
                $('.navbar').removeClass('nav-bg');
            }
        }
        if ($('.write').length > 0) {
            $('.write').each(function () {
                if (scroll > $(this).offset().top - ($(window).height() - 100)) {
                    // var lgLine = $('.line-sqaure').not($('.lg-line'));
                    $(this).find($('span')).addClass('width');
                }
            });
        }

        if ($('.write-black').length > 0) {
            $('.write-black').each(function () {
                if (scroll > $(this).offset().top - ($(window).height() / 2 + 390)) {
                    $(this).find($('span')).addClass('width');
                }
            });

        }
        if ($('.business').length > 0) {
                if (scroll > $('.business').offset().top - ($(window).height() / 2)) {
                    $('.thumbnail').addClass('is-animate');
                }
        }
        if ($('.downloadApp').length > 0) {
                if (scroll > $('.downloadApp').offset().top - ($(window).height() / 2)) {
                    $('.downloadApp').addClass('is-animate');
                }
        }
        if ($('.features').length > 0) {
                if (scroll > $('.features').offset().top - ($(window).height() / 4)) {
                    $('.features').addClass('is-animate');
                }
        }
        if ($('.business').length > 0) {
                if (scroll > $('.business').offset().top - ($(window).height() / 2)) {
                    $('.business').addClass('is-animate');
                }
        }

    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    var windowHeight = $(window).height();
    $('.full-height').css('min-height', windowHeight);
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


});
$(window).on('load', function () {
    $('.header').addClass('is-animate');
    $('.header-content-img img').addClass('is-animate');
    $('.header-content .main-title__text').addClass('is-animate');
    $('.navbar-default').addClass('is-animate');

});