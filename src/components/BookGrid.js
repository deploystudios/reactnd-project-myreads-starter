import React, { Component } from 'react';
import Book from './Book';

class BookGrid extends Component {

    render() {

        const { index, books, bookshelves, updateBookshelf } = this.props;

        return (
            <ol className="books-grid">
                { 
                Object.entries(books)
                .filter(book => book[1].bookshelf === index)
                .map(book => (
                <Book 
                    key={ book[0] } 
                    index={ book[0] }
                    book={ book[1] } 
                    bookshelves={ bookshelves }
                    updateBookshelf={ updateBookshelf }
                />))
                }
            </ol>
        )
    }

}

export default BookGrid;