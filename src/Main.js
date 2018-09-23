import React, { Component } from "react";
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

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf library={this.state.library} />
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </a>
        </div>
      </div>
    );
  }
}

export default Main;
