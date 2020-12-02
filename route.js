const GET = require('./routes/GET');
// const requestError = require('./routes/requestError');
import { requestError } from './routes/requestError';
// const FETCH = require('./routes/FETCH);
// const POST = require('./routes/POST);

exports.route = (req, res) => {
    if(req.method === 'GET') {
        GET(req, res);
    } else {
        requestError(404);
    }
}