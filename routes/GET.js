exports.GET = (req, res) => {
    if(req.url === '/api') {
        res.writeHead(200, { 'Content-Type':'application/json' });
        res.end(JSON.stringify({
            message:`Route found - ${req.url}`
        }));
    } else {
        res.writeHead(404, { 'Content-Type':'application/json' });
        res.end(JSON.stringify({
            message:'Route not found'
        }));
    }
}