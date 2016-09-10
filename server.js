const Hapi = require('hapi');
const bool = require('./src/types/bool');
const gender = require('./src/types/gender');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route
server.route({
    method: 'GET',
    path:'/bool', 
    handler: function (request, reply) {
        return reply(bool());
    }
});
server.route({
    method: 'GET',
    path:'/gender', 
    handler: function (request, reply) {
        return reply(gender());
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});