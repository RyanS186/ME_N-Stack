// Write some methods to connect to our database (MongoDB)
// Tell our app to manually connect with our functions

// Create a 'Scheme' for our object 'Movie' to push it into our MongoDB

const mongoose = require('mongoose');

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true}, (err) => {
    if(err){
        console.log("Error!");
    } else {
        console.log("No error!")
    }
});

module.exports = mongoose;
