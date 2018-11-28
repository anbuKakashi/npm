'use strict';

const express = require('express');

// Constants
const PORT = 8100;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world coyyyyy selamat pagi\n');
});

app.listen(PORT, HOST);
console.log("Running on http://${HOST}:${PORT}");

