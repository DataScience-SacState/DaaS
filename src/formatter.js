const typeConfig = require('./typeConfig');

/* Backtracing recursive filler.
 * merrillm sep10
 *
 * Please note that the Object implementation attempts to replace nested values
 * before it actually calls a typefunc on itself. While this may seem trivial on
 * first glance, it actually serves the purpose of allowing a user to throw a
 * random "number" type into the argument position of a paramater for a higher scope.
 * Hence, backtracing recursive.
 *
 * If this makes no sense ^ ask merrillm for a test case.
 */
function format(template) {

    if (template === undefined || template === null) return template;   
    
    if (typeof template === "string" &&
            template.startsWith('@') &&
            typeConfig.isType(template.slice(1))) {
        return typeConfig.getFunc(template.slice(1))({});
    }
    
    // It is an Array
    if (template instanceof Array) {
        return template.map((x) => format(x));
    }
    
    // It is an Object
    if (typeof template === 'object') {
        
        for (key in template) {
            template[key] = format(template[key]); 
        }
        
        // Is this itself a filler type?
        if (template.type) {
            var funk = typeConfig.getFunc(template.type);
            if (funk) return funk(template);
        }
    }
    
    return template;
};

module.exports = format;
