/**
 * Created by admin on 2016/8/28.
 */

$(function(){
    $(".xt-nav-min").mouseenter(function(){
        $(".xt-nav-u").stop().slideDown(500);
    })
    var team=null;
    var teamer=null;
   $(".xt-nav-min").mouseleave(function(){
        $(".xt-nav-u").stop().slideUp(500);
    })
    $(".xt-center-l-b").mouseenter(function(){
        $(".xt-center-l-b-lb-all span").css("display","block") ;
        clearInterval(team);
    })
    $(".xt-center-l-b").mouseleave(function(){
        $(".xt-center-l-b-lb-all span").css("display","none") ;
        team=setInterval(function(){
            $("#xt-center-right").click();
        },1500);
    })
        var pic=0;
    $("#xt-center-right").click(function(){
        if( pic== $(".xt-center-l-b-lb ul li").length-1){
            pic=0;
            $(".xt-center-l-b-lb ul").css("left","0px")
        }
        pic++;
        var targe=-$(".xt-center-l-b-lb").width()*pic;
        $(".xt-center-l-b-lb ul").stop().animate({"left":targe+"px"});
    })
    $("#xt-center-left").click(function(){
        if( pic==0){
            pic=$(".xt-center-l-b-lb ul li").length-1;
            var stp= -pic*$(".xt-center-l-b-lb").width()
            $(".xt-center-l-b-lb ul").css("left",stp+"px")
        }
        pic--;
        var targe=-$(".xt-center-l-b-lb").width()*pic;
        $(".xt-center-l-b-lb ul").stop().animate({"left":targe+"px"});
    })
    team=setInterval(function(){
        $("#xt-center-right").click();
    },1500);
    var xtBox=$(".xt-center-c")[0];
    var boxUl=xtBox.children[0];
    var boxOl=xtBox.children[1];
    var ulList=boxUl.children;
    var oList = boxOl.children;
    var rightArr = document.getElementById("right");
    var leftArr = document.getElementById("left");
    var imgWidth=xtBox.offsetWidth;
    oList[0].className = "current";
    var square=0;
    var picc=0;
    for (var i = 0; i < oList.length; i++) {
        var li = oList[i];
        li.index = i;
        li.onmouseover = function () {
            for (var j = 0; j < oList.length; j++) {
                oList[j].className = "";
            }
            this.className = "current";
            var idx = this.index;
            var target = -idx * imgWidth;
            $(boxUl).stop().animate({"left":target+"px"})
            picc = idx;
            square = idx;
        };
    }
    $(xtBox).mouseenter(function(){
        $("#arr").css("display","block");
        clearInterval(teamer);
    })
    $(xtBox).mouseleave(function(){
        $("#arr").css("display","none");
        teamer = setInterval(function () {
            rightArr.click();
        }, 2000);
    })
    rightArr.onclick = function () {
        if (picc == ulList.length - 1) {
            picc = 0;
            boxUl.style.left = "0px";
        }
        picc++;
        var target = -picc * imgWidth;
        $(boxUl).stop().animate({"left":target+"px"});
        if (square < oList.length - 1) {
            square++;
        } else {
            square = 0;
        }
        for (var i = 0; i < oList.length; i++) {
            oList[i].className = "";
        }
        oList[square].className = "current";
    };
    leftArr.onclick = function () {
        if (picc == 0) {
            picc = ulList.length - 1;
            boxUl.style.left = -picc * imgWidth + "px";
        }
        picc--;
        var target = -picc * imgWidth;
        $(boxUl).stop().animate({"left":target+"px"});
        if(square == 0) {
            square = oList.length - 1;
        }else {
            square--;
        }
        for (var i = 0; i < oList.length; i++) {
            oList[i].className = "";
        }
        oList[square].className = "current";
    }
    teamer = setInterval(function () {
        rightArr.click();
    }, 2000);
    $(".xt-center-b-top-top li ").mouseenter(function(){
        $(this).addClass("xz").siblings().removeClass("xz");
        $(".navAll >div").eq($(this).index()).addClass("disB").siblings().removeClass("disB");
    })
    $(".xt-center-r-bot li").mouseenter(function(){
       // $(this).children(0).children(0).css("display","none")
       // $(this).siblings().children(0).children(0).css("display","block")
        $(this).children(0).children(0).stop(false,true).fadeOut(200);
        $(this).siblings().children(0).children(0).stop(false,true).fadeIn();
    })
    $(".xt-center-r-bot ul").mouseleave(function(){
        $(".xt-center-r-bot li").children(0).children(0).stop(false,true).show();

    })

})
