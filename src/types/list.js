/*
list?format={
	"type": "list",
	"count": 10,
	"format": {
		"bool": { "type": "bool" }
	}
}
*/

var data = {
	date: {
		type: "date",
		min: "2013-09-23",
		max: "2015-08-12"
	}
}

function list(params) { 
	var params = JSON.parse(params.format);	
	var list = [];
	for(var i = 0; i < params.count; i++) {
		list.push(createFormatObj(params.format))
	}
	return list;

}

function createFormatObj(format) {
	console.log(format)
	const typeFuncs = require('../typeMap');
	console.log(typeFuncs)
	var obj = {};
	for (var key in format) {
		var settings = format[key];
		var settingsFunc = typeFuncs[settings.type]
		console.log(settingsFunc)
		if (settingsFunc) obj[key] = settingsFunc(settings);
	}
	return obj;
}

module.exports = list;