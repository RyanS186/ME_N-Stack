// Creating Variables
const express = require('express');
const cors = require('cors');
const app = express();
const movieRoutes = require('./routes/movie-routes.js');
const ticketRoutes = require('./routes/ticket-routes.js');

// Use variables
app.use(cors());
app.use('/movie', movieRoutes);
app.use('/ticket', ticketRoutes);

// Old way - creating all paths in our main config file = bad
// dedicated files for storing paths / methods / business logic
// Modularity, as our app will likely be storing different types of objects
// Cinema project objects for: Movies, Tickets, drinks/food, different sets of routes for each object

const server = app.listen(5015, () => {
    console.log(`server has started on port ${server.address().port}`)
});