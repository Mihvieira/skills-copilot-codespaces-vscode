
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Parse JSON
app.use(express.json());

// Array of comments
const comments = [
    { id: 1, author: 'Hello', comment: 'World' }
];

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Get comment by id
app.get('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = comments.find(c => c.id === id);
    if (!comment) {
        res.status(404).send('Comment not found');
    } else {
        res.json(comment);
    }
});

// Create new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comment.id = comments.length + 1;
    comments.push(comment);
    res.json(comment);
});

// Update comment by id
app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = comments.find(c => c.id === id);
    if (!comment) {
        res.status(404).send('Comment not found');
    } else {
        comment.author = req.body.author;
        comment.comment = req.body.comment;
        res.json(comment);
    }
});

// Delete comment by id
app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = comments.findIndex(c => c.id === id);
    if (index === -1) {
        res.status(404).send('Comment not found');
    } else {
        comments.splice(index, 1);
        res.send('Comment deleted');
    }
});

// Start web server
app.listen(port, () => {
    console.log(`Web server started at http://localhost:${port}`);
});