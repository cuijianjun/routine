/**
 * Created by PPLU on 2016/12/16.
 */
var storage = null;
var back={
    backFunction:function(e){
        e.preventDefault();
        eventBackButton: function A(e){
            //首页
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
                //其他页面
            }else {
               navigator.app.backHistory();
               eval(data.page[data.page.length - 1].close);
               close();
            }
            //队列放在硬盘
            storage.getJson("hash", function(data) {
                var arr_back = []
                for(var i=0;i<data.page.length-1;i++){
                    arr_back.push(data.page[i]);
                }
                data.page = arr_back;
                storage.put("hash", data, function() {})
            })
        }

    },
    //阻止浏览器默认行为
    stopBack:function(e){
        e.preventDefault();
    }
}
