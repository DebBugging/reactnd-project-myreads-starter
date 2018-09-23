import React, { Component } from "react";
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
          this.setState({searchBooks: [] });
        }
        this.setState({ searchBooks: searchBooks });
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a
            className="close-search"
            onClick={() => this.setState({ showSearchPage: false })}
          >
            Close
          </a>

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
            {this.state.searchBooks.map(book => (
              <li key={book.id}>
                <Book book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
