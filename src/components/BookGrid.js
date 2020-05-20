import React from 'react';
import Book from './Book';

const BookGrid = props => {

        const { bookshelfIndex, bookshelves, books, refreshBooks } = props;

        return (
            <ol className="books-grid">
                { 
                books.filter(book => book.shelf === bookshelfIndex)
                .map(book => (
                <Book 
                    key={ book.id } 
                    book={ book } 
                    bookshelves={ bookshelves }
                    refreshBooks={ refreshBooks }
                />))
                }
            </ol>
        )

}

export default BookGrid;