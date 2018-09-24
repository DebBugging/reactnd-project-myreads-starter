import React from "react";

import { Route } from "react-router-dom";

import Search from "./Search";

import Main from "./Main";

import * as BooksAPI from "./BooksAPI";

import "./App.css";

class BooksApp extends React.Component {
  //Make the books change shelves when clicking through the Select.
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then(library => {
      this.setState({ library: library });
    });
  };

  //Render the HTML
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <Main />} />
        <Route
          exact
          path="/search"
          render={() => <Search changeShelf={this.changeShelf} />}
        />
      </div>
    );
  }
}

export default BooksApp;
