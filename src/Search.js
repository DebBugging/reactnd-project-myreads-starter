import React, { Component } from "react";

import { Link } from "react-router-dom";

import Book from "./Book";

import * as BooksAPI from "./BooksAPI";

class Search extends Component {
  //Set state for search
  state = {
    query: "",
    searchBooks: []
  };

  updateQuery = query => {
    this.setState({
      query: query
    });
    this.updateSearch(query);
  };

  updateSearch = query => {
    if (query) {
      BooksAPI.search(query).then(searchBooks => {
        if (searchBooks.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: searchBooks });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchBooks.map(searchBook => (
              <li key={searchBook.id}>
                <Book book={searchBook} changeShelf={this.props.changeShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
