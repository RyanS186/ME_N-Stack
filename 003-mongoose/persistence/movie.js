// Creating Schema for a movie object
const mongoose = require('mongoose');

// Destructuring
// Pulling variables / functions out of another object
// Create new variables called Schema and model
const {Schema, model} = mongoose;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true,
    },
    watched: {
        type: Boolean,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
});

// Make a model of our Movie using the schema
const movie = model('movie', movieSchema);

module.exports = movie;