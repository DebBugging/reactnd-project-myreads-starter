import React, { Component } from "react";

import { Link } from "react-router-dom";

import Shelf from "./Shelf";

class Main extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              name={"Currently Reading"}
              books={this.props.library.filter(
                book => book.shelf === "currentlyReading"
              )}
              changeShelf={this.props.changeShelf}
            />
            <Shelf
              name={"Want to Read"}
              books={this.props.library.filter(
                book => book.shelf === "wantToRead"
              )}
              changeShelf={this.props.changeShelf}
            />
            <Shelf
              name={"Read"}
              books={this.props.library.filter(
                book => book.shelf === "read"
              )}
              changeShelf={this.props.changeShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Main;
