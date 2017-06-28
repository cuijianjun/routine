/**
 * Created by 远远 on 2016/8/30.
 */

var turn = function(target,time,opts){
    target.find('a').hover(function(){
        $(this).find('img').stop().animate(opts[0],time,function(){
            $(this).hide().next().show();
            $(this).next().animate(opts[1],time);
        });
    },function(){
        $(this).find('.info').animate(opts[0],time,function(){
            $(this).hide().prev().show();
            $(this).prev().animate(opts[1],time);
        });
    });
}
var verticalOpts = [{'width':0},{'width':'200px'}];
turn($('#vertical'),100,verticalOpts);
var horizontalOpts = [{'height':0,'top':'120px'},{'height':'380px','top':0}];
turn($('#horizontal'),100,horizontalOpts);
