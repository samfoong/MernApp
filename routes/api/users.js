const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');

// Load User model
const User = require('../../models/User');

// Route to output JSON-automatically serve out 200 status(everything is ok)
// @Route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Users Works'})); 

// @Route   GET api/users/register
// @desc    register users
// @access  Public 
router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email}) //find if email exist
        .then(user => {
            if(user) {  // if(user)means there is a user with that email
                return res.status(400).json({email: 'Email already exist'});
            }   else {
                const avatar = gravatar.url(req.body.email, {
                    s: '200', // Size
                    r: 'pg', // Rating
                    d: 'mm' // Default-show no profile picture
                });

                // Create New User-req.body will be from the react app
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    avatar,
                    password: req.body.password
                });

            
            }
        })
});

module.exports = router;