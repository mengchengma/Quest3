const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Users List");
});

router.get('/new', (req, res) => {
    res.send("New User Form");
});

// router.post('/', (req, res) => {
//     res.send("Create New User");
// });

// router.get('/:id', (req, res) => {
//     res.send(`Getting User Data: ${req.params.id}`);
// });

router.param("id", (req, res, next, id) => {
    console.log(`User ID is: ${id}`);
    next();
});

router.route('/:id').get((req, res) => {
    res.send(`Getting User Data: ${req.params.id}`);
}).delete((req, res) => {
    res.send(`Deleting User Data: ${req.params.id}`);
}).put((req, res) => {
    res.send(`Updating User Data: ${req.params.id}`);
});

module.exports = router;