$(function () {
    //左边黑色背景图
    $(".nyl-bottom-left-center li").click(function () {
        $(this).css("backgroundColor", "red").children().slideUp().slideDown()
        $(this).siblings().css("backgroundColor", "")
    })
    $(".nyl-bottom-left-center").mouseleave(function () {
        $(this).find("li").css("backgroundColor", "");
    })
    //点击文字，让下边的内容对应
    $(".text li").mouseenter(function () {
        //清空所有li的样式
        //2. 让当前li添加current类，并且让其他的li移除current类
        $(this).addClass("current").siblings().removeClass("current");
        //3. 让对应下标的div添加selected，并且让其他div移除selected类
        var idx = $(this).index();
        $(".meac-content ul").eq(idx).addClass("current").siblings().removeClass("current");
    })
    //中间部分图片
    $(".nyl-bottom-center .yt").mouseenter(function () {
        $(this).stop().hide().siblings().stop().fadeIn();
    })
    $(".nyl-bottom-center .bgc").mouseleave(function(){
        $(this).stop().hide().siblings().stop().fadeOut().stop().show();
    })
    //$(".nyl-bottom-center .yt").mouseleave(function(){
    //    $(this).show().siblings().hide();
    //})
    //小轮播图自动播放
//var lb_photos=document.getElementById("lb_photos");
    var timer = setInterval(function () {
        $("#lb_photos").animate({"top": "-260px"}, 3000, function () {
            $("#lb_photos").css("top", "0px")
        })
    })
}, 3000);




