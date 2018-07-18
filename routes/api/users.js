const express = require('express');
const router = express.Router();

// Route to output JSON-automatically serve out 200 status(everything is ok)
// @Route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Users Works'})); 

module.exports = router;