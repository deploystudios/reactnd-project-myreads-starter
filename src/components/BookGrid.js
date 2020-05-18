import React, { Component } from 'react';
import Book from './Book';

class BookGrid extends Component {

    render() {

        const { bookshelfIndex, bookshelves, books } = this.props;

        return (
            <ol className="books-grid">
                { 
                books.filter(book => book.shelf === bookshelfIndex)
                .map(book => (
                <Book 
                    key={ book.title } 
                    book={ book } 
                    bookshelves={ bookshelves }
                />))
                }
            </ol>
        )
    }

}

export default BookGrid;