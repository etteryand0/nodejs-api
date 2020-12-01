const http = require('http');
const { emitWarning } = require('process');
const PORT = process.env.PORT || 3000;
// // specify server address
// const hostname = '127.0.0.1';
// const port = 3000;
// // import routing file
// const server = require('./route.js');

const server = http.createServer((req, res) => {
    // simple routing
    if(req.url === '/api' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type':'application/json' });
        res.end(JSON.stringify({
            message:'Route found'
        }));
    } else {
        res.writeHead(404, { 'Content-Type':'application/json' });
        res.end(JSON.stringify({
            message:'Route not found'
        }));
    }

});

// run server
server.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});