const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('users/new', {firstName: ""});
});

router.get('/', (req, res)=>{
    res.render(`users/list`, {users});
});

router.post('/', (req, res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const age = req.body.age;

    const isValid = firstName !=="";//Check if they are there, added
    if(isValid)
    {
        console.log(`Adding User: ${firstName}`);
        users.push({
            firstName:firstName,
            lastName:lastName,
            gender:gender,
            age:age, //trailing comma
        });
        console.log(`New Set of Users: ${users}`);
        res.send("User Created!");
    }
    else{
        console.log("Error adding user!");
        res.render("users/new", {firstName:firstName, lastName:lastName});
    }
});

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

const users = [];

module.exports = router;