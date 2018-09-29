import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map(book => (
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
