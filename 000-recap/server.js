const express = require('express');

const app = express();

// Get request that listens to /hello
app.get('/hello', (req, res) => {
    return console.log('Hello');
});

// Post request that listens to /post
app.post('/post', (req, res) => {
    return console.log('Post request made');
});

// Making a new object/function called server
const server = app.listen(5015, () => {
    console.log(`server has started on port ${server.address().port}`)
});

