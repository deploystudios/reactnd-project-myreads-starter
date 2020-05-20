import React from 'react';
import BookGrid from './BookGrid';

const Bookshelf = props => {

        const { bookshelfIndex, bookshelves, books, refreshBooks } = props;

        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{ bookshelves[bookshelfIndex].title }</h2>
            <div className="bookshelf-books">
                <BookGrid 
                    key={ bookshelfIndex }
                    bookshelfIndex={ bookshelfIndex } 
                    bookshelves={ bookshelves }
                    books={ books }
                    refreshBooks={ refreshBooks }
                />
            </div>
          </div>		
        )

}

export default Bookshelf;