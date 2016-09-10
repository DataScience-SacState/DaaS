var gender = function() {
	return (Math.random() > .5) ? 'female' : 'male';
};

module.exports = gender;