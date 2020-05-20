import React, { Component } from 'react';
import Book from './Book'
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

class BookSearch extends Component {

    state = { 
        books: [],
    }

    searchOnKeyUp = e => {
        BooksAPI.search(e.target.value.trim())
        .then(books => {
          this.setState({ books })
        })
        .catch(() => {
            this.setState({ books: [] })
        })
    }

    render() {

        return <div className="app">
            <div className="search-books">
              <div className="search-books-bar">
                <Link to="/">
                  <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                  <input type="text" onKeyUp={ this.searchOnKeyUp } placeholder="Search by title or author" />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">                
                { 
                    this.state.books && this.state.books.length && this.state.books.map(book => (
                    <Book 
                        key={ book.id } 
                        book={ book } 
                        bookshelves={ this.props.location.state.bookshelves } 
                    />))
                }
                </ol>
              </div>
            </div>
          </div>
    }

}

export default BookSearch;