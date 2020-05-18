import React, { Component } from 'react';

class Book extends Component {

    onBookshelfChange = e => {
        // this.props.updateBookshelf(this.props.index, e.target.value);
    }

    render() {

        const { book, bookshelves } = this.props;

        return (
            <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                <div className="book-shelf-changer">
                  <select onChange={ this.onBookshelfChange }>
                    <option key="move" value="move" disabled>Move to...</option>
                    { Object.values(bookshelves).map(bookshelf => (
                        <option key={ `${bookshelf[0]}-select` } value={ bookshelf[0] }>{ bookshelf.title }</option>
                    )) }
                    <option key="none" value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{ book.title }</div>
              <div className="book-authors">{ book.authors.join(', ') }</div>
            </div>
          </li>
        )
    }

}

export default Book;