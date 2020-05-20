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
    this.refreshBooks();
  }

  refreshBooks = async () => {
    await BooksAPI.getAll().then((books) => this.setState({ books }));
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
                    refreshBooks={ this.refreshBooks }
                  />
                ))}
              </div>
            </div>
            <div className="open-search">
              <Link to={{ 
                pathname: '/search',
                state: { 
                  bookshelves: this.state.bookshelves
                }
              }}>
                <button>Add a book</button>
              </Link>
            </div>
          </div>
      </div>
    )
  }
}

export default BooksApp
