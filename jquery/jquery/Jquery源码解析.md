## Jquery源码解析
#### 1.数字尽量定义变量(便于维护)

> var isSpeed = "10";a=a+isSpeed;

#### 2.对象封装

    function Jquery(){
      return New Jquery.prototype.init()
    }


    Jquery.prototype.init = function(){}
    Jquery.prototype.css = function(){}

    Jquery.prototype.init.prototype = Jquery.prototype 原型共享

    jquery().css();

> jquery() 直接执行Jquery.prototype.init()，然后就可以直接调用css方法

