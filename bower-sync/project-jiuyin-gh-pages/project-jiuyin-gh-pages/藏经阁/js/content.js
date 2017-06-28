/**
 * Created by hao on 2016/8/27.
 */
var datas = ["wdjs.jpg", "sljs.jpg", "gbjs.jpg", "emjs.jpg", "tmjs.jpg", "jywjs.jpg", "jlgjs.jpg","jztjs.jpg"];
$(function () {
    //nav标签下边框高亮
    $(".nav-bar li").mouseenter(function () {
        $(this).css("height", "53px").addClass("select").siblings().removeClass("select")
    });
    $(".nav-bar li").mouseleave(function () {
        $(this).css("height", "55px").removeClass("select");
    });
    //logo广告栏显示隐藏
    $("#logo_img").mouseenter(function () {
        $("#gg_img").stop().show(200);
    });
    $("#logo_img").mouseleave(function () {
        $("#gg_img").stop().hide(100);
    });
    /*网页内容部分*/
    //子导航栏部分显示隐藏
    //论坛部分显示隐藏
    $("#forum").mouseenter(function () {
        $("#forum_box").css("display", "block");
    });
    $("#forum").mouseleave(function () {
        $("#forum_box").css("display", "none");
    });

    //服务隐藏盒子
    //进入serves让hideserve显示
    $("#serves").mouseenter(function () {
        $("#hideserve").css("display", "block");
    });
    //进入serves让hideserve隐藏
    $("#serves").mouseleave(function () {
        $("#hideserve").css("display", "none")
    });

    //蜗牛移动
    $("#wn_box").parent().mouseenter(function () {
        $("#wn_box").css("display", "block");
    });
    $("#wn_box").parent().mouseleave(function () {
        $("#wn_box").css("display", "none");
    });

    //蜗牛游戏
    $(".wnu_geme").mouseenter(function () {
        $(".geme_hide").css("display", "block")
    });
    $(".wnu_geme").mouseleave(function () {
        $(".geme_hide").css("display", "none")
    });
    //蜗牛移动
    $("#wnmove").mouseenter(function () {
        $("#wn_box").css("display", "block")
    });
    $("#wnmove").mouseleave(function () {
        $("#wn_box").css("display", "none")
    });

    /*网页内容部分 S*/
    $("#subnav ul").children("li").mousemove(function (event) {
        var x = event.pageX;
        var y = event.pageY;
        var idx = $(this).index();
        if (idx < 4) {
            $("#preview").show().css({
                "left": x + 100 + "px",
                "top": y - 124 + "px"
            });
        } else {
            $("#preview").show().css({
                "left": x - 100 - 456 + "px",
                "top": y - 124 + "px"
            });
        }
        $("#preview").children("img").attr("src", "images/" + datas[idx]);

    });
    $("#subnav ul").children("li").mouseleave(function () {
        $("#preview").hide();
    });
});









