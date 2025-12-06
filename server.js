const express = require('express');
const app = express();

const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

app.set('view engine', 'ejs');
app.use(logger);
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


app.use('/posts', postsRouter);
app.use('/users', usersRouter);


app.listen(3032);

function logger(req, res, next) {
    console.log(`Page Accessed: ${req.originalUrl}`);
    next();
}