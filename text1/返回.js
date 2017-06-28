/**
 * Created by PPLU on 2016/12/16.
 */

// =========================PhoneGap==================================
// 等待加载PhoneGap
document.addEventListener("deviceready", onDeviceReady, false);
// PhoneGap加载完毕
function onDeviceReady() {
    // 按钮事件
    document.addEventListener("backbutton", eventBackButton, false); // 返回键

}

// 返回键

function eventBackButton() {
    if($(".classobj").is(":visible")){
        alert('再点击一次退出!');
        document.removeEventListener("backbutton", eventBackButton, false); // 注销返回键
        document.addEventListener("backbutton", exitApp, false);//绑定退出事件
        // 3秒后重新注册
        var intervalID = window.setInterval(function() {
            window.clearInterval(intervalID);
            document.removeEventListener("backbutton", exitApp, false); // 注销返回键
            document.addEventListener("backbutton", eventBackButton, false); // 返回键
        }, 3000);
    }else {
        //navigator.app.backHistory();

    }






}

function exitApp(){
    navigator.app.exitApp();
}




setTimeout