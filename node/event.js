var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event',function(){
	console.log('这是一个自定义事件');
});
setTimeout(function(){
	event.emit('some_event');
},1000);