/**
 * Created by 远远 on 2016/8/30.
 */

$(function () {
    // 功能一 tab头部切换
    $(".page3-tab div").click(function () {
        var x = $(this).position().left + "px";
        var idx = $(this).index() - 1;
        $(".line").css("left", x)
        /*animate({"left":x},500)*/
        $(".contentBox>div").eq(idx).css("display", "block").siblings().css("display", "none")

    })
    // 功能二 底部的切换
    $("ul.small a").click(function () {
        var result = $(this).children().attr("src").replace("-s", "-hover");
        console.log(result);
        $(this).children().attr("src", result);

        var imgs = $(this).parent().siblings().children().children();
        for(var i = 0; i < imgs.length;i ++) {
            var temp = imgs.eq(i).attr("src").replace("-hover", "-s");
            imgs.eq(i).attr("src", temp);
        }

        var href = $(this).attr("href");
        $(this).parent().parent().prev().attr("src", href);
        return false;
    })

})
