import React, { Component } from 'react';
import Book from './Book';

class BookGrid extends Component {

    render() {

        const { books, index, updateBookshelf } = this.props;

        return (
            <ol className="books-grid">
                { 
                Object.entries(books)
                .filter(book => book[1].bookshelf === index)
                .map(book => (
                <Book 
                    key={ book[0] } 
                    book={ book[1] } 
                    index={ book[0] }
                    updateBookshelf={ updateBookshelf }
                />))
                }
            </ol>
        )
    }

}

export default BookGrid;