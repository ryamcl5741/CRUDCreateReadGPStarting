const express = require('express');
const bookRoute = express.Router();

// Book model
let Book = require('../model/Book');

// Get all books
bookRoute.route('/').get((req, res) => {
  Book.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error(`Could not get books: ${error}`);
    })
})

// Add a book
bookRoute.route('/add-book').post((req, res) => {
  Book.create(req.body).then(() => {
    console.log('Book added successfully.');
    res.status(200).json({ message: 'Book added successfully.' });
  })
  .catch((error) => {
    console.error(`Could not save book: ${error}`)
  })
})

// Delete a book
bookRoute.route('/delete-book/:id').delete((req, res) => {
  console.log(`Preparing to delete: ${req.params.id}`);
  Book.findByIdAndDelete(req.params.id).then(() => {
    console.log('Book deleted successfully.');
    res.status(200).json({ message: 'Book deleted successfully.' });
  })
  .catch((error) => {
    console.error(`Could not delete book: ${error}`);
  })
})

module.exports = bookRoute;