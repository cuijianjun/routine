/**
 * Created by PPLU on 2017/1/8.
 */
define(['jquery'],function($){
    function scrollTo(opts){
        this.opts= $.extend({},scrollTo.DEFAULTS,opts);
        this.$a=$('html,body')
    }
    scrollTo.prototype.move=function(){
        var opts=this.opts;
        this.$a.animate({
            scrollTop:opts.dest
        },opts.speed);
    };
    scrollTo.prototype.go=function(){
        this.$a.scrollTop(this.opts.dest)
    }
    scrollTo.DEFAULTS={
        dest:0,
        speed:800
    };
    $.fn.extend({
        //插件名
        backtop:function(opts){
            this.each(function(){
                //创建实例
                new BackTop(this,opts);
            });
            return this;
        }
    })
    return{
        scrollTo:scrollTo
    }
})