import express from 'express';
import { createServer } from 'http';
import { HTTPS } from 'express-sslify';

var app = express();

// Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku). See further comments below
app.use(HTTPS());

createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});