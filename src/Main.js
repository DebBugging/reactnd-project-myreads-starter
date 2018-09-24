import React, { Component } from "react";

import { Link } from "react-router-dom";

import Shelf from "./Shelf";

import * as BooksAPI from "./BooksAPI";

class Main extends Component {
  //Add state for fetching Books
  state = {
    library: []
  };
  //Fetch books from the BooksAPI
  componentDidMount() {
    BooksAPI.getAll().then(library => {
      this.setState({ library: library });
    });
  }
  //Make the books change shelves when clicking through the Select.
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then(library => {
      this.setState({ library: library });
    }); 
  }

  //Set the props to be used in Shelf.js
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf library={this.state.library} 
            changeShelf= {this.changeShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
