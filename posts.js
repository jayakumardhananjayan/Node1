const express = require('express');
const router = express.Router();
const postdb=require('./models/DB')

router.get('/', (req, res) => {
    res.send('we are on posts');
});
router.get('/specifics', (req, res) => {
    res.send('we are on specifics');
});

router.post('/', (req, res) => {
    console.log('req.body');
});

module.exports = router;