const Hapi = require('hapi');
const Boom = require('boom');
const typeMap = require('./src/typeMap');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000 
});

for (var key in typeMap) {
    (function(key, typeMap){    
        server.route({
            method: 'GET',
            path:'/'+key,
            handler: function (request, reply) {
                try {                
                    var replyVal = reply(typeMap[key](request.query));
                    return replyVal;
                } catch (err) {
                    return reply(Boom.badRequest("Bad Request!", "You're killing me."));
                }
            }
        });
    })(key, typeMap);
}

// Start the server!
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
