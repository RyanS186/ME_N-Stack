// Creating Variables
const express = require('express');
const cors = require('cors');
const app = express();
const movieRoutes = require('./routes/movie-routes.js');
const mongoose = require('./persistence/database.js');

// Use variables
app.use(express.json());
app.use(cors());
app.use('/movie', movieRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log("Post error");
    next();
})

const server = app.listen(5015, () => {
    console.log(`server has started on port ${server.address().port}`)
});

