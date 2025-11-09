const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('Hello World');
    res.render("index", {user: "Mengs"});
});

app.get('/users', (req, res) => {
    res.send("Users List");
});

app.get('/users/new', (req, res) => {
    res.send("New User Form");
});

app.listen(3032);