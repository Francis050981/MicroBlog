//index.js
const httpProxy = require('express-http-proxy');
const express = require('express');
const cors = require('cors');
const app = express();
var logger = require('morgan');
const porta= 10000;

app.use(logger('dev'));
app.use(cors());

function selectProxyHost(req) {
    if (req.path.startsWith('/api/usuarios'))
        return 'http://localhost:4000/usuarios';
    else if (req.path.startsWith('/api/posts'))
        return 'http://localhost:5000/posts';
    else if (req.path.startsWith('/api/temas'))
        return 'http://localhost:7000/temas';
}

app.use((req, res, next) => {
    httpProxy(selectProxyHost(req))(req, res, next);
});

app.listen(porta, () => {
    console.log('API Gateway running!');
});