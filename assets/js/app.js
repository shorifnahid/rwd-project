$(function(){
    'use stirct';
       //backToTop bottom
       $(window).on('scroll',function(){
        if($(window).scrollTop() > 400){
            $('#backToTop').fadeIn('slow')
        }else{
            $('#backToTop').fadeOut('slow')
        }
    })

    $('#backToTop').on('click',function(){
        $('html,body').animate({
            scrollTop:0,
        },1000)
    })

    //
    
    //overly js
    $('.search_btn').on('click',function(){
        $('.search_overly').addClass('search_active')
    });
    $('.close_icon').on('click',function(){
        $('.search_overly').removeClass('search_active')
    })

    //slick
    $('.slick_slider').slick({
        peed: 500,
        fade: true,
        prevArrow:'<i class="fas fa-chevron-left slider_arrow slider_left"></i>',
        nextArrow:'<i class="fas fa-chevron-right slider_arrow slider_right"></i>',
    })
    $('.client_slick').slick({
        arrows:false,
        slidesToShow:5,
        infinite:false,
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:4,
                }
              },
              {
                breakpoint: 768,
                settings: {
                    slidesToShow:3,
                }
              },
              {
                breakpoint: 576,
                settings: {
                    slidesToShow:2,
                }
              },
            ]
    })
    $('.testimonial_slick').slick({
        arrows:false,
        dots:true,
        dotsClass:'test_dots',
    })
    //venobox
    $('.venobox').venobox();

    //counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    //
   $('.navbar-toggler').on('click',function(){
       $('.mobile_menu_container').toggleClass('active_bt')
   })

   //preloder
   $(window).on('load',function(){
       $('.preloder').fadeOut(1000)
   })
})