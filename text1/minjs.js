/**
 * Created by PPLU on 2017/1/8.
 */
require.config({
    paths:{
        jquery:"jQuery-1.10.2.js"
    }
});
requirejs(['jquery'],['scrollto'],function($){



    $('#backTop').backtop({
        mode:"go"
    })




   /* var scroll=new scrollto.ScrollTo({
            dest:600,
            speed:300
    })
    scroll.call(this, $);
    $('#backtop').on('click', $.proxy(scroll.move,scroll));
    $(window).on('scroll',function(){
        checkposition($(window).height())
    });
    function move(){
        $('html,body').animate({
            scrollTop:0
        },800)
    }
    function checkposition(pos){
        if($(window).scrollTop()>pos){
            $('#backTop').fadeIn();
        }else{
            $('#backTop').fadeOut();
        }
    }*/
})