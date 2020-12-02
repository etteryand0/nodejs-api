function requestError(code) {
    if(code === 404) {
        let traceback = 'Route not found';
    }

    // Traceback
    res.writeHead(code, { 'Content-Type':'application/json' });
    res.end(JSON.stringify({
        message:traceback
    }));
}