import React, { Component } from 'react';
import BookGrid from './BookGrid';

class Bookshelf extends Component {


    render() {

        const { bookshelf, books, index, updateBookshelf } = this.props;

        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{ bookshelf.title }</h2>
            <div className="bookshelf-books">
                <BookGrid 
                    key={ index } 
                    books={ books } 
                    bookshelf={ bookshelf } 
                    index={ index }
                    updateBookshelf={ updateBookshelf }
                />
            </div>
          </div>		
        )
    }

}

export default Bookshelf;