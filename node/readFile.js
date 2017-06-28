var fs= require('fs');
fs.readFile('fil.txt',function(err,data){
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
fs.readFile('fil.txt','UTF-8',function(err,data){
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
