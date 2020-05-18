import React, { Component } from 'react';
import BookGrid from './BookGrid';

class Bookshelf extends Component {


    render() {

        const { bookshelves, books, index, updateBookshelf } = this.props;

        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{ bookshelves[index].title }</h2>
            <div className="bookshelf-books">
                <BookGrid 
                    key={ index }
                    index={ index } 
                    books={ books } 
                    bookshelves={ bookshelves } 
                    updateBookshelf={ updateBookshelf }
                />
            </div>
          </div>		
        )
    }

}

export default Bookshelf;