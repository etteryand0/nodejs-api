// const { emitWarning } = require('process');
const routing = require('./route');
const http = require('http');

// specify server address
const HOSTNAME = 'localhost';
const PORT = process.env.PORT || 3000;

// routing
const server = http.createServer((req, res) => {
    routing.route(req, res)
});

// run server
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running on port ${PORT}`)
});