const path = require('path');
const express = require('express');
const apiRouter = require('./routes/api');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRouter);

// app.get('/', (req, res) => res.sendFile('index'));

module.exports = app;
