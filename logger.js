var url = "http://mylogger.io/log";

function log(msg){
	// Send an HTTP req
	console.log(msg);
}


module.exports.log = log;
//module.exports.<outside name> = <inside name>;
