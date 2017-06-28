/**
 * Created by cjj on 2016/8/27.
 */
$(function(){
    $(".wn-gamehead-gamesmallimg").mouseenter(function(){

        $(".wn-gamehead-gamebigimg").show();
    })
    $(".wn-gamehead-gamebigimg").mouseleave(function(){

        $(".wn-gamehead-gamebigimg").hide();
    })
})

$(function(){
    $("#wnGameHeadNav").children().mouseenter(function(){
        $(this).children("div").show();
    });
    $("#wnGameHeadNav").children().mouseleave(function(){
        $(this).children("div").hide();
    })
})
