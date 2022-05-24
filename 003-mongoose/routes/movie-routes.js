// Importing the router object from express framework
const router = require('express').Router();

// Import Movie model
const movie = require('../persistence/movie.js');

// Sanity Test Route
router.get("/", (req, res, next) => {
    res.send("It's working");
});


// Middleware to print the time of a request
router.use((req, res, next) => {
    console.log('Time: ', new Date().toLocaleTimeString());
    next();
});

// Rather than app.get, we use router.get
router.get('/getAll', (req, res) => {
    res.send("All movies retrieved");
});

router.get('/getId/:id', (req, res, next) => {
    const id = req.params.id;
    movie.findById(id, (error, movie) => {
        res.status(200).send(movie);
    });
});

router.get('/getRating/:rating', (req, res, next) => {
    const rating = req.params.rating;
    movie.find({
        'rating': rating
    }, (error, movie) => {
        res.status(200).send(movie);
    });
});

// Method to post data into MongoDB
router.post('/create', (req, res, next) => {
    // Make a variable that is equal to the request body
    const record = req.body;
    // Make a new movie out of record
    const movieObj = new movie(record);
    // Using the inbuilt function, add this movieObj to our database
    movieObj.save() // Once our .save() has run, whatever it returns pass into our .then()
        .then((result) => { // call the data .save() returns result and do the following:
            console.log(record);
            res.status(201).send(`${result.title} has been added to the database`);
        }).catch((error) => {
            next(error); // if there are any errors, pass them onto the error handling middleware
        });
});

// Method to post multiple objects into MongoDB
router.post('/createMany', (req, res, next) => {
    // Make a variable that is equal to the request body
    const data = req.body;


    data.forEach((movieData) => {
        const movieObj = new movie(movieData);
        movieObj.save().then((result) => {
            console.log(`${result.title} has been added to the database`);
        }).catch((error) => {
            next(error);
        });
    });
    res.status(201).send(`All data has been added to the database`);

});

router.put('/updateId/:id', (req, res, next) => {
    const data = req.body;
    const id = req.params.id;
    movie.findByIdAndUpdate(id, data, (error, movie) => {
        res.status(202).send("Movie updated");
    })
});

router.delete('/deleteId/:id', (req, res, next) => {
    movie.findByIdAndDelete(req.params.id, (error) => {
        res.status(202).send("Movie deleted");
    });
});

// router.deleteMany({'query' : value})

// Export this file as a module, so server can use it
module.exports = router;