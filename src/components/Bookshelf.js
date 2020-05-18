import React, { Component } from 'react';
import BookGrid from './BookGrid';

class Bookshelf extends Component {


    render() {

        const { bookshelfIndex, bookshelves, books } = this.props;

        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{ bookshelves[bookshelfIndex].title }</h2>
            <div className="bookshelf-books">
                <BookGrid 
                    key={ bookshelfIndex }
                    bookshelfIndex={ bookshelfIndex } 
                    bookshelves={ bookshelves }
                    books={ books }
                />
            </div>
          </div>		
        )
    }

}

export default Bookshelf;