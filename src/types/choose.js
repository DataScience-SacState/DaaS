var choose = function(params) {
	var from = JSON.parse(params.from);
	
	var max = Object.keys(from).length;
	var index = Math.floor(Math.random() * max);
	
	return from[index];
};

module.exports = choose;
