$(document).ready(function(){
    $('[data-view]').click(function(){
        $('html,body').animate({scrollTop:$('[data-scroll="'+$(this).attr('data-view')+'"]').position().top},1000);
    })
    $(window).scroll(function(){
        var st = $(this).scrollTop();
        if(st>50){
            $('.button-up').fadeIn(1000);
        }else{
            $('.button-up').fadeOut(1000);
        }
    })
    $('.button-up').click(function(){
        $('html,body').animate({scrollTop:0},1000);
    })
    $('.video-section').click(function(){
        $('.main-overlay').fadeIn(500);
        $('.pop-up').fadeIn(500);
    })
    $('.main-overlay').click(function() {
        $(this).fadeOut(500);
        $('.pop-up').fadeOut(500);
        $('.pop-up').html($('.pop-up').html());
    });
})