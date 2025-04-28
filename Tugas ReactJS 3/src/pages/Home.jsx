import React, { useState } from 'react';
import Header from "../component/Header/Header.jsx";
import Hero from "../component/Hero/Hero.jsx";
import ProductList from "../component/ProductList/ProductList.jsx";
import Footer from "../component/Footer/Footer.jsx";

function Home() {
  // Adding state to manage books list
  const [books, setBooks] = useState([
    { id: 1, title: 'The Art of Frozen II', price: 150 },
    { id: 2, title: 'The Art of Moana', author: 'Author 2', price: 200 },
    { id: 3, title: 'The Art of Zootopia', author: 'Author 3', price: 250 },
  ]);
  const [newBook, setNewBook] = useState({ title: '', author: '', price: '' });
  const [error, setError] = useState('');

  // Function to handle adding a new book
  const handleAddBook = () => {
    if (!newBook.title || !newBook.author || !newBook.price) {
      setError('Please fill out all fields!');
      return;
    }

    const newId = books.length + 1;
    const bookToAdd = { id: newId, ...newBook, price: parseInt(newBook.price) };
    setBooks([...books, bookToAdd]);
    setNewBook({ title: '', author: '', price: '' });
    setError('');
  };

  return (
    <>
      <Header />
      <Hero />
      
      {/* Form to add a new book - Positioned below Hero */}
      <div className="container mt-4">
        <h2>📚 Book List</h2>
        <ul className="list-group">
          {books.map((book) => (
            <li key={book.id} className="list-group-item">
              {book.title} - {book.author} (Rp {book.price.toLocaleString()})
            </li>
          ))}
        </ul>

        {/* Form to add a new book */}
        <div className="d-flex flex-column align-items-start mt-4">
          <h5>Add a New Book:</h5>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="d-flex">
            <input
              type="text"
              placeholder="Title"
              value={newBook.title}
              onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
              className="me-2 form-control"
            />
            <input
              type="text"
              placeholder="Author"
              value={newBook.author}
              onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
              className="me-2 form-control"
            />
            <input
              type="number"
              placeholder="Price"
              value={newBook.price}
              onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
              className="me-2 form-control"
            />
            <button
              onClick={handleAddBook}
              className="btn btn-success"
            >
              Add Book
            </button>
          </div>
        </div>
      </div>

      <ProductList max={3} />
      <Footer />
    </>
  );
}

export default Home;
