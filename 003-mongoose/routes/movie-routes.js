// Importing the router object from express framework
const router = require('express').Router();

router.use((req, res, next) => {
    console.log('Time: ', new Date().toLocaleTimeString());
    next();
});

// Rather than app.get, we use router.get
router.get('/getAll', (req, res) => {
    res.send("All movies retrieved");
});

// Path that creates an error
router.get('/error', (req, res, next) => {
    throw new Error('Big Scary Error!!');
});

// Export this file as a module, so server can use it
module.exports = router;