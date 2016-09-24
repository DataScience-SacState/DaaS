var typeList = ["bool", "gender", "date", "list", "choose", "testfile"]

module.exports.getTypeList  = ( ) => [].concat(typeList);
module.exports.isType       = (x) => (typeList.indexOf(x) > -1);
module.exports.getFunc      = (x) => module.exports.isType(x)?(require('./types/'+x)):undefined;
