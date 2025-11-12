const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    console.log('Hello World');
    res.render("index", {user: "Mengs"});
});

app.listen(3032);