const express = require('express');

const app = express();

app.get('/', (req,res) => res.send('Hello World'));
// '/' is the homepage, send a request when we are at the homepage and respond by sending Hello

const port = process.env.PORT || 5000;
// to deploy to heroku process.env.port, locally is port 5000

app.listen(port, () => console.log(`Server running on port ${port}`));
// pass in the port we want to listen to and put a callback when we run node server