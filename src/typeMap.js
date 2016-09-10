var brandonsList = ["bool", "gender", "date"]

module.exports = (function(){
    var ret = {};
    
    for (var index in brandonsList) {
        var key = brandonsList[index];
        ret[key] = require("./types/" + key + "");
    }
    
    return ret;
})();

console.log(module.exports);
