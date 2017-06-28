//tab栏begin
$(function () {
    //first
    $(".lv-shop-activity-center-hd-tab-second ul").eq(0).stop().show().siblings().stop().hide();
    $(".lv-shop-activity-center-hd-tab-first li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var idx = $(this).index();
        $(".lv-shop-activity-center-hd-tab-first-content > div").eq(idx).stop().show(300).siblings().stop().hide(300);
        $(".lv-shop-activity-center-hd-tab-first-content > div").eq(idx).children().eq(0).stop().show().siblings().stop().hide();
        $(".lv-shop-activity-center-hd-tab-second ul").eq(idx).stop().show().siblings().stop().hide();
    });


    $(".lv-shop-activity-center-hd-tab-first-content > div").eq(0).stop().show().siblings().stop().hide();
    $(".lv-shop-activity-center-hd-tab-first-content > div").eq(0).children().eq(0).stop().show().siblings().stop().hide();
    $(".lv-shop-activity-center-hd-tab-second ul li").mouseenter(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var par = $(this).parent().index();
        var idx = $(this).index();
        //console.log(par + "----" + idx);
        //$(".lv-shop-activity-center-hd-tab-first-content div:eq(par) div:eq(idx)").show().parent().siblings().hide();
        $(".lv-shop-activity-center-hd-tab-first-content > div").eq(par).stop().show(300).siblings().stop().hide(300);
        $(".lv-shop-activity-center-hd-tab-first-content > div").eq(par).children().eq(idx).stop().show().siblings().stop().hide();

    });
    // console.log($(".lv-shop-activity-center-hd-tab-first-content > div").eq(0));

//tab栏end


});




