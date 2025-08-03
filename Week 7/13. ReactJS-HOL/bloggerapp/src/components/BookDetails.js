import React from 'react';
import './components.css';

const books = [
  { id: 1, bname: 'Master React', price: '670' },
  { id: 2, bname: 'Deep Dive into Angular 11', price: '800' },
  { id: 3, bname: 'Mongo Essentials', price: '450' }
];

function BookDetails() {
  return (
    <div className="box">
      <h2>Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.bname}</strong>
            <small>{book.price}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
