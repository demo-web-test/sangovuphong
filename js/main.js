document.addEventListener("DOMContentLoaded", function () {
    //toggle-menu
    $(".category-name").on('click', function () {
        $(".menu-toggle").toggleClass("on");
        $(".category-list").toggleClass("active");
        $(".menu-toggle-mobile").removeClass("on");
        $("ul.nav").removeClass("active");
        $(".bg-black-menu").removeClass("active");
        $(".bg-black-category").toggleClass("active");
    });
    $(".menu-toggle").on('click', function () {
        $(".menu-toggle").toggleClass("on");
        $(".category-list").toggleClass("active");
        $(".menu-toggle-mobile").removeClass("on");
        $("ul.nav").removeClass("active");
        $(".bg-black-menu").removeClass("active");
        $(".bg-black-category").toggleClass("active");
    });

    $(".category-name").on('click', function () {
        $(".category-list-mobile").toggleClass("active");
    });
    $(".menu-toggle").on('click', function () {
        $(".category-list-mobile").toggleClass("active");
    });

    $('.bg-black-menu').click(function () {
        $('.menu-toggle-mobile').removeClass('on');
        $("ul.nav").removeClass("active");
        $(this).removeClass('active');
    })
    $('.bg-black-category').click(function () {
        $('.menu-toggle').removeClass('on');
        $(".category-list-mobile").removeClass("active");
        $(".category-list").removeClass("active");
        $(this).removeClass('active');
    })

    $(".category-name-mobile").on('click', function () {
        $(".menu-toggle-mobile").toggleClass("on");
        $("ul.nav").toggleClass("active");
        $(".bg-black-menu").toggleClass("active");
        $(".menu-toggle").removeClass("on");
        $(".category-list-mobile").removeClass("active");
        $(".category-list").removeClass("active");
        $(".bg-black-category").removeClass("active");
    });
    $(".menu-toggle-mobile").on('click', function () {
        $(".menu-toggle-mobile").toggleClass("on");
        $("ul.nav").toggleClass("active");
        $(".menu-toggle").removeClass("on");
        $(".bg-black-menu").toggleClass("active");
        $(".category-list-mobile").removeClass("active");
        $(".category-list").removeClass("active");
        $(".bg-black-category").removeClass("active");
    });

    //menu scroll
    var hei = $('.menu').offset().top;
    $(window).scroll(function () {
        if ($(this).scrollTop() > hei) {
            $('.menu').css({ "position": "fixed", "top": "0", "width": "100%" });
        }
        else {
            $('.menu').css({ "position": "relative" });
        }
    })

    //slick
    $('.slick-slider').slick();

    //slider
    $('.slider-for').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: false,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        arrows: false,
        focusOnSelect: true
    });

    // product detail
    $('.down').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }

        $input.val(value);

    });
    $('.up').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value < 100) {
            value = value + 1;
        } else {
            value = 100;
        }

        $input.val(value);

    });

    //video iframe
    $('.video-small .video').click(function (e) {
        e.preventDefault();
        var sr = $(this).attr('data-src');
        var name = $(this).attr('data-name');
        $('.vdbig').attr('src', sr);
        $('.video-big .title').text(name);
    })
    //scroll up
    $(document).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollup').fadeIn('slow');
            $('.scrollup').removeClass('hideScr');
        }
        else {
            $('.scrollup').fadeOut('slow');
        }
    });

    $('.scrollup').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });
})