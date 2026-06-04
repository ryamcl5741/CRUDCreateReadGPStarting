const express = require('express');
const bookRoute = express.Router();
// Book model
let Book = require('../models/Book');
// Get all books
bookRoute.route('/').get((req, res) => {
Book.find()
.then((data) => {
res.json(data);
})
.catch((error) => {
return next(error);
})
})
// Add a book
bookRoute.route('/add-book').post((req, res) => {
Book.create(req.body).then(() => {
console.log('Book added successfully.');
res.status(200);
})
.catch((error) => {
console.error(`Could not save book: ${error}`)
})
})