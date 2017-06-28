/**
 * Created by BearLili on 2014/8/11.
 */


/*获取标签文本内容（兼容所有浏览器）*/
function getInnerText(element){
    //能力测试
    if(typeof element.innerText === "string"){
        return element.innerText;
    }else{
        return element.textContent;
    }
}

/*设置标签文本内容（兼容所有浏览器）*/
function setInnerText(element,value){
    //能力测试
    if(typeof element.innerText === "string"){
        element.innerText = value;
    }else{
        element.textContent = value;
    }
}

/*获取下一个兄弟元素兼容性问题*/
function getNextElementSibling(element){
    //能力测试
    //如果元素兄弟元素为true，则可以直接返回
    if(element.nextElementSibling){
        return element.nextElementSibling;
        //如果不为true，则开始用兄弟节点查找
    }else{
        var node = element.nextSibling;
        //如果兄弟节点存在且兄弟节点类型不为1（不是元素节点） ，
        //则不停往后一个节点寻找，直到找到元素节点或没有节点了，返回
        while(node && node.nodeType != 1){
            node = node.nextSibling;
        }
        return node;
    }
}

/*获取上一个兄弟元素兼容性问题*/
function getPreviousElementSibling(element){
    //能力测试
    //如果元素兄弟元素为true，则可以直接返回
    if(element.previousElementSibling){
        return element.previousElementSibling;
        //如果不为true，则开始用兄弟节点查找
    }else{
        var node = element.previousSibling;
        //如果兄弟节点存在且兄弟节点类型不为1（不是元素节点） ，
        //则不停往前一个节点寻找，直到找到元素节点或没有节点了，返回
        while(node && node.nodeType != 1){
            node = node.previousSibling;
        }
        return node;
    }
}

/*获取第一个子元素兼容性问题*/
function getFirstElementChild(element){
    //能力测试
    //如果元素第一个子元素为true，则可以直接返回
    if(element.firstElementChild){
        return element.firstElementChild;
        //如果不为true，则开始用第一个子节点查找
    }else{
        var node = element.firstChild;
        //如果第一个子节点存在且子节点类型不为1（不是元素节点） ，
        //则不停往后一个节点寻找，直到找到元素节点或没有节点了，返回
        while(node && node.nodeType != 1){
            node = node.nextSibling;
        }
        return node;
    }
}

/*获取最后一个子元素兼容性问题*/
function getLastElementChild(element){
    //能力测试
    //如果元素最后一个子元素为true，则可以直接返回
    if(element.lastElementChild){
        return element.lastElementChild;
        //如果不为true，则开始用最后一个子节点查找
    }else{
        var node = element.lastChild;
        //如果最后一个子节点存在且子节点类型不为1（不是元素节点） ，
        //则不停往前一个节点寻找，直到找到元素节点或没有节点了，返回
        while(node && node.nodeType != 1){
            node = node.previousSibling;
        }
        return node;
    }
}

/*获取scrollTop 还能获取scrollLeft(对象).top .left */
function scroll() {
    return {
        //获取scrollTop
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        //获取scrollLeft
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

/*获取网页的可视宽高 获取clientWidth 还能获取clientHeight(对象).width .height */
function client() {
    return {
        width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    }
}

/*获取页面的X和Y坐标，兼容所有浏览器（对象）.x .y */
function getPage(event) {
    return {
        x: event.pageX || event.clientX + scroll.left,
        y: event.pageY || event.clientY + scroll.top
    }
}

/*获取对象计算后的样式 函数封装*/
function getStyle(obj,attr) {
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}

/*/!*封装动画函数*!/
 function animate(obj, target) {
 //        BUG修复，如果进入函数时存在timer方法，则清除以前的方法，重新打开新的一个timer方法。
 if (obj.timer) {
 clearInterval(obj.timer);
 }
 obj.timer = setInterval(function () {
 //            获取obj当前位置
 var leader = obj.offsetLeft;
 //            设置每一次移动像素
 var step = 20;
 //            如果obj当前位置在目标的正方向，则让移动方向为反。
 if (leader > target) {
 step = -step;
 }
 //            如果目标位置减去当前位置的绝对值 大于 一步距离，怎么表示还可以继续移动，执行让obj按照正常行为向目标接近
 if (Math.abs(target - leader) > Math.abs(step)) {
 leader += step;
 obj.style.left = leader + "px";
 //                如果两者之差小于一步距离，无法精确的移动到目前位置时，程序将强行将obj搬运到目标点，也就是直接让obj的left等于目标位置
 } else {
 clearInterval(obj.timer)
 obj.style.left = target + "px";
 }
 }, 15)
 }*/

/*让任意对象 缓动 动画效果 任意数值属性（px）变化 (增加：opacity和zIndex)*/
function animate(obj, json, fn) {
    if (obj.timer) {
        clearInterval(obj.timer);
    }
    obj.timer = setInterval(function () {

        var flag = true;
        for (var k in json) {
            if (k == "opacity") {
                //对透明度做特殊处理，透明度是一个小数，扩大1000倍来进行计算
                var target = json[k];
                var leader = getStyle(obj, k);

                //让leader和target1000倍进行运算
                leader = leader * 1000;
                target = target * 1000;

                leader = parseInt(leader);
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;

                //设置的时候，一定要除以1000
                obj.style[k] = leader / 1000;

                if (leader != target) {
                    flag = false;
                }
            } else if (k == "zIndex") {
                //如果是zIndex的时候，直接设置就行了
                obj.style[k] = json[k];
            } else {
                //属性名： attr  k
                //属性值： target：  json[k]
                var leader = getStyle(obj, k);//获取到的值带了单位
                leader = parseInt(leader) || 0;
                var step = (json[k] - leader) / 10;
                //如果step是负数的话，不能向上取整，应该向下取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
                console.log("代码还执行吗");

                if (leader != json[k]) {
                    flag = false;
                }
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
}

/*任意对象注册事件*/
function addEvent(element, type, fn) {
    //能力检测
    if(element.addEventListener) {
        //支持addEventListener
        element.addEventListener(type, fn, false);
    }else if(element.attachEvent) {
        //支持attachEvent
        element.attachEvent("on"+type, fn);
    }else {
        element["on"+type] = fn;
        //btn.onclick = fn;
    }
}

/*任意对象移除事件*/
function removeEvent(element, type, fn) {
    //能力检测
    if (element.removeEventListener) {
        element.removeEventListener(type, fn, false);
    } else if (element.detachEvent) {
        element.detachEvent("on" + type, fn);
    } else {
        element["on" + type] = null;
    }
}

/*阻止事件冒泡*/
function stopPropagation(event) {
    //能力检测
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}
