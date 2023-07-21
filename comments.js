// Create web server application

// Import Express web framework for Node.js
const express = require('express');
const bodyParser = require('body-parser');

// Create web server application
const app = express();

// Import JSON data
const comments = require('./comments.json');

// Configure web server application
app.use(bodyParser.json());

// Create GET endpoint for '/api/comments'
app.get('/api/comments', (req, res) => {
    res.json(comments);
});

// Create POST endpoint for '/api/comments'
app.post('/api/comments', (req, res) => {
    comments.push(req.body);
    res.json(comments);
});

// Create DELETE endpoint for '/api/comments/:id'
app.delete('/api/comments/:id', (req, res) => {
    comments.splice(req.params.id, 1);
    res.json(comments);
});

// Create PUT endpoint for '/api/comments/:id'
app.put('/api/comments/:id', (req, res) => {
    comments[req.params.id] = req.body;
    res.json(comments);
});

// Start web server application
app.listen(3000, () => {
    console.log('Web Server is running on port 3000');
});