const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());


app.use((req, res, next) => {
    console.log('Request Type:', req.method);
    next();
});

app.listen(80, () => console.log(`Running on PORT 8080`));

app.use(bodyParser.json());

app.get('/api', (req,res,next) => {
    res.send({status: 200, message: 'you have reached api'});
});

app.get('/status', (req,res,next) => {
    res.send({status: 200, message: 'you have reached status'});
});

app.get('/api/v1/', (req,res,next) => {
    res.send({status: 200, message: 'you have reached api v1'});
});

app.get('/api/v2/', (req,res,next) => {
    res.send({status: 200, message: 'you have reached api v2'});
});

module.exports = {app};
