const express = require('express');
const { readFile } = require("fs");
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    res.send( await readFile('./home.html', 'utf8') );
});

module.exports = app;