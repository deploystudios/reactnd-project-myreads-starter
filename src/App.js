import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooksTitle from './components/ListBooksTitle';
import Bookshelf from './components/Bookshelf';
import { Link } from 'react-router-dom';

class BooksApp extends Component {

  state = {
    books: [],
    bookshelves: {
      currentlyReading: {
        title: 'Currently Reading'
      },
      wantToRead: {
        title: 'Want to Read'
      },
      read: {
        title: 'Read'
      }
    },
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  updateBookshelf = (bookIndex, bookshelf) => {
    const books = { ...this.state.books }
    books[bookIndex].bookshelf = bookshelf;
    console.log(books);
    this.setState({ books });

  }

  addBook = (book) => {
    this.setState({ ...this.state.books, book});
  }

  render() {

    return (
      <div className="app">
          <div className="list-books">
            <ListBooksTitle title='MyReads' />
            <div className="list-books-content">
              <div>
                { Object.keys(this.state.bookshelves).map(key => (
                  <Bookshelf 
                    key={ key }
                    bookshelfIndex={ key } 
                    bookshelves={ this.state.bookshelves }
                    books={ this.state.books }
                  />
                ))}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">
                <button>Add a book</button>
              </Link>
            </div>
          </div>
      </div>
    )
  }
}

export default BooksApp
