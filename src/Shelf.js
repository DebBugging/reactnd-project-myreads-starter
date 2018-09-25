import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
  render() {
    console.log(this.props.library);
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.library
                .filter(book => book.shelf === "currentlyReading")
                .map(book => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      changeShelf={this.props.changeShelf}
                      moveBooks={book.shelf}
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.library
                .filter(book => book.shelf === "wantToRead")
                .map(book => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      changeShelf={this.props.changeShelf}
                      moveBooks={book.shelf}
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.library
                .filter(book => book.shelf === "read")
                .map(book => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      changeShelf={this.props.changeShelf}
                      moveBooks={book.shelf}
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
