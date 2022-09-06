const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Traveller. Rest here.');
});

app.get('/health', (req, res) => {
    res.send('Service is healthy');
});

app.listen(3000);
