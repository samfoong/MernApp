const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users'); //point url to api files
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express(); //initialize the app

// Body Parser Middleware - to use req.body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected')) // if connected successfully
    .catch(err => console.log(err)); //if error

// app.get('/', (req,res) => res.send('Hello World'));
// '/' is the homepage, send a request when we are at the homepage and respond by sending Hello

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;
// to deploy to heroku process.env.port, locally is port 5000

app.listen(port, () => console.log(`Server running on port ${port}`));
// pass in the port we want to listen to and put a callback when we run node server