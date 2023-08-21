const mongoose = require('mongoose');
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

const url = "mongodb://localhost:27017/notes";

mongoose.connect(url, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }) .then(() => {
app.listen(8080, () => console.log(`Running on PORT 8080`));
});

const db = mongoose.connection;
db.on('error', () => console.log('Connection error!'));
db.once('open', () => console.log('Successfully connected!'));

app.use(bodyParser.json());

app.use('/api/v1/', routes);

module.exports = {app};
