const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected')) // if connected successfully
    .catch(err => console.log(err)); //if error

app.get('/', (req,res) => res.send('Hello World'));
// '/' is the homepage, send a request when we are at the homepage and respond by sending Hello

const port = process.env.PORT || 5000;
// to deploy to heroku process.env.port, locally is port 5000

app.listen(port, () => console.log(`Server running on port ${port}`));
// pass in the port we want to listen to and put a callback when we run node server