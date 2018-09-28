import React, { Component } from "react";

import { Link } from "react-router-dom";

import Shelf from "./Shelf";

import * as BooksAPI from "./BooksAPI";

class Main extends Component {
                                
  //Set the props to be used in Shelf.js
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
            library={this.props.library}
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
