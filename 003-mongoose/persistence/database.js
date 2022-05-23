// Write some methods to connect to our database (MongoDB)
// Tell our app to manually connect with our functions

// Create a 'Scheme' for our object 'Movie' to push it into our MongoDB

const mongoose = require('mongoose');

// Connecting to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/movies', { useNewUrlParser: true}, (err) => {
    if(err){
        console.log("Unable to connect to DB");
    } else {
        console.log("Connected to DB")
    }
});

module.exports = mongoose;
