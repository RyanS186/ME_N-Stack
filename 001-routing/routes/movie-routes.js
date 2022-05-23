// Importing the router object from express framework
const router = require('express').Router();

// Rather than app.get, we use router.get
router.get('/getAll', (req, res) => {
    res.send("All movies retrieved");
});

router.put('/put/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Updated movie with id: ${id}`);
});

router.post('/post', (req, res) => {
    res.send("Added new movie");
});

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Deleted movie with id: ${id}`);
});

// Export this file as a module, so server can use it
module.exports = router;