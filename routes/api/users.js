const express = require('express');
const router = express.Router();

// POST api/users
// register user route
router.post('/', (req, res) => res.send('User route'));

module.exports = router;