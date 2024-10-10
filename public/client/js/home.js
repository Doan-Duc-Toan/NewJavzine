$(document).ready(function () {
    $('.cate-item > i').click(function () {
        $(this).parent('.cate-item').children('.toanngu').stop().toggle(300)
    })

    // $('.fa-bookmark.fa-regular').hover(function(){
    //     $(this).removeClass('fa-regular');
    //     $(this).addClass('fa-solid');
    // },
    //     function(){
    //         $(this).removeClass('fa-solid');
    //         $(this).addClass('fa-regular')
    //     }
    // )
    $('button.nav-btn').click(function () {
        $('.nav-respon').css('left', '0px')
        $('.shadow').css('display', 'block')
    })
    $('.close-nav').click(function () {
        $('.nav-respon').css('left', '-500px')
        $('.shadow').css('display', 'none')
    })
    $('.shadow').click(function () {
        $('.nav-respon').css('left', '-500px')
        $(this).css('display', 'none')
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    $('.scroll-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    $('.auth').click(function () {
        $('.dropdown-profile').stop().slideToggle(500)
    });
    $('.comment-button').click(function () {
        $('.login-request').stop().slideToggle(500)
    });
    $('.btn-feedback').click(function () {
        $('.body-shadow').fadeIn(500)
    })
    $('.btn-close').click(function () {
        $('.body-shadow').fadeOut(500)
    })
    $('.edit-btn').click(function() {
        $('.change-blc').fadeIn(300)
    });

    $('.shadow-bg').click(function() {
        $('.change-blc').fadeOut(300)
    });

    $('.exit-button').click(function() {
        $('.change-blc').fadeOut(300)
    })
})
