import React, { Component } from 'react';

class Book extends Component {

    onBookshelfChange = e => {
        this.props.updateBookshelf(this.props.index, e.target.value)
        // e.currentTarget.reset();
    }

    render() {

        const { book } = this.props;


        return (
            <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.cover}")` }}></div>
                <div className="book-shelf-changer">
                  <select onChange={ this.onBookshelfChange }>
                    <option value="move" disabled>Move to...</option>
                    <option value="bookshelf1">Currently Reading</option>
                    <option value="bookshelf2">Want to Read</option>
                    <option value="bookshelf3">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{ book.title }</div>
              <div className="book-authors">{ book.authors }</div>
            </div>
          </li>
        )
    }

}

export default Book;