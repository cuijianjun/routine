/**
 * Created by cjj on 2016/8/29.
 */
//表单验证样式
$(function () {


    //头部js
    //            导航广告显示
    $("#gameLogo").mouseenter(function () {
        $("#linkImg").show(200);
    })
    $("#linkImg").mouseleave(function () {
        $("#linkImg").hide(100);
    })
//            导航扩展框
    $("#navSkip>li").mouseenter(function () {
        $(this).children("div").show();
    })
    $("#navSkip>li").mouseleave(function () {
        $(this).children("div").hide();
    })
    //游戏展示


//            导航广告显示
        $("#gameLogo").mouseenter(function () {
            $("#linkImg").show(200);
        })
        $("#linkImg").mouseleave(function () {
            $("#linkImg").hide(100);
        })
//            导航扩展框
        $("#navSkip>li").mouseenter(function () {
            $(this).children("div").show();
        })
        $("#navSkip>li").mouseleave(function () {
            $(this).children("div").hide();
        })
    //头部结束
    $(".msgContainer").focus(function () {
        $(this).addClass("msgHover");
    });
//创建帐号 6-25位字母数字或下划线组成
    var regZh = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
//设置密码 6-20个字符组成
    var regpassWord = /^\w{5,17}$/;
//确认密码 确认密码

//真实姓名 帐号归属凭证，保障帐号安全
    var regName = /^[\u4e00-\u9fa5]{2,}$/;
//身份证号 帐号归属凭证，保障帐号安全
    var regshenfenZ = /^\d{15}|\d{18}$/
//手机号码 可享受官方增值服务
    var regExp = /^(13[0-9]|14[57]|15[0-9]|170|177|18[0-9])\d{8}$/;
//验证码  验证码
    check($("#username"), regZh);//验证帐号
    check($("#password"), regpassWord);//验证密码
    //check($("#confirmPassword"), regpassWord);//确认密码
    check($("#mobileRealname"), regName);//验证姓名
    check($("#identity"), regshenfenZ);//验证身份证号
    check($("#mobile"), regExp);//验证手机号码


    $("#confirmPassword").blur(function () {
        //表单正则表达式验证
        if ($("#confirmPassword").val() == $("#password").val()) {
            $("#confirmPassword").addClass("msgError1").removeClass("msgError").parent().next().removeClass("iconError")
        } else {
            $("#confirmPassword").addClass("msgError").parent().next().addClass("iconError");
        }
    })

});



function check(inp, regEx) {


    inp.blur(function () {
        //console.log("成功")
        if (regEx.test($(this).val())) {
            $(this).addClass("msgError1").removeClass("msgError").parent().next().removeClass("iconError")
        } else {
            $(this).addClass("msgError").parent().next().addClass("iconError");
        }
    })


}


/*/QQ的规律 5-11位 开头不为0
 //var regQQ = /^[^0]\d{4,10}$/;//不为零的数字
 var regQQ = /^[1-9]\d{4,10}$/;
 //手机的规律 11位 另外有规定号段
 //var regMobile = /^\d{11}$/;
 var regMobile = /^(13[0-9]|14[57]|15[0-9]|18[0-9])\d{8}$/;
 //邮箱的规律 barack.hussein.obama@white-house.gov.us
 //var regEmail = /^\w@\w$/;
 var regEmail = /^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
 //座机和姓名规律见之前的案例
 var regTel = /^0\d{2,3}-\d{7,8}$/;
 var regName = /^[\u4e00-\u9fa5]{2,}$/;*/



/*
 var date = isG1 ? '19' + id.slice(6, 12) : id.slice(6, 14),
 year = date.slice(0, 4),
 month = date.slice(4, 6),
 day = date.slice(6),
 thisYear = new Date(serverTimestamp).getFullYear();

 if (year < 1900 || year > thisYear ||
 new Date(year, (month-1), day).getMonth() !== month-1) {
 return   : "您填写的身份证出生日期错误";
 }*/
