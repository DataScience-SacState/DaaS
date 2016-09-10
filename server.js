const Hapi = require('hapi');
const Boom = require('boom');
const typeConfig = require('./src/typeConfig');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000 
});

var typeList = typeConfig.getTypeList()
for (var index in typeList) {
    (function(key, typeConfig){
        server.route({
            method: 'GET',
            path:'/'+key,
            handler: function (request, reply) {
                try {                
                    var replyVal = reply(typeConfig.getFunc(key)(request.query));
                    return replyVal;
                } catch (err) {
                    console.log(err)
                    return reply(Boom.badRequest("Bad Request!", "Invalid Parameters?"));
                }
            }
        });
    })(typeList[index], typeConfig);
}

// Start the server!
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
