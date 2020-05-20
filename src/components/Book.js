import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';

class Book extends Component {

    state = { book: {} }

    componentDidMount = () => {
      this.setState({ book: this.props.book })
    }

    onBookshelfChange = async e => {
        await BooksAPI.update(this.state.book, e.target.value).then(() => {
          this.props.refreshBooks && this.props.refreshBooks();
        });
    }

    render() {

        const { book, bookshelves } = this.props;

        return (
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ 
                  width: 128, 
                  height: 193, 
                  backgroundImage: book.imageLinks ? `url("${book.imageLinks.smallThumbnail}")` : null, 
                  backgroundColor: '#efefef'
                }}
                ></div>
                <div className="book-shelf-changer">
                  <select onChange={ this.onBookshelfChange } value={ book.shelf ? book.shelf : 'none' }>
                    <option key="move" value="move" disabled>Move to...</option>
                    { Object.entries(bookshelves).map(bookshelf => (
                        <option 
                          key={ `${bookshelf[0]}-select` } 
                          value={ bookshelf[0] } 
                        >
                        { bookshelf[1].title }
                        </option>
                    )) }
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{ book.title }</div>
              <div className="book-authors">{ book.authors && book.authors.length && book.authors.join(', ') }</div>
            </div>
          </li>
        )
    }

}

export default Book;