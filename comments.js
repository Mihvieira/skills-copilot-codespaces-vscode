// create web server

// create web server

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Comments');
});

router.get('/new', (req, res) => {
    res.send('New Comment');
});

router.get('/:id', (req, res) => {
    res.send('Comment ' + req.params.id);
});

router.get('/:id/edit', (req, res) => {
    res.send('Edit Comment ' + req.params.id);
});

router.delete('/:id', (req, res) => {
    res.send('Delete Comment ' + req.params.id);
});

module.exports = router;
