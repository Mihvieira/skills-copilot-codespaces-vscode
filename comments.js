// create web server
// create a route for comments
// create a route for comments/new
// create a route for comments/:id
// create a route for comments/:id/edit
// create a route for comments/:id/delete

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

router.get('/:id/delete', (req, res) => {
    res.send('Delete Comment ' + req.params.id);
});

module.exports = router;