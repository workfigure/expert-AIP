
'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
const router = express.Router();

//DB connection
switch(global.GATEWAY_PROVIDER){
    case 'mongodb':
        let db = require('./core/connector/provider/mongo/db');
        db.init();
    default:
        //TODO: Log error message saying that there is no connector provider to access the backend data.
        break;
}

//load routes
const indexRoute = require('./gateway/routes/index-route');
const userRoute = require('./gateway/routes/user-route');

app.use(bodyParser.json({
     limit: '5mb',
     parameterLimit: 100,
    }));
app.use(bodyParser.urlencoded({ extentend: false }));

// Enable CORS ()
if(config.MODE == 'development') {
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
    });
}

app.use('/', indexRoute);
app.use('/users', userRoute);

const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}