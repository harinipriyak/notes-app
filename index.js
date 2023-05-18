const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

const url = "mongodb://localhost:27017";

mongoose.connect(url, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }) .then(() => {
  app.listen(8080);
});

const db = mongoose.connection;
db.on('error', () => console.log('Connection error!'));
db.once('open', () => console.log('Successfully connected!'));

app.use(bodyParser.json());

app.use('/api/v1/', routes);

module.exports = {app};
