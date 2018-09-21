import React from 'react'

import Search from './Search';

import Main from './Main';

import './App.css'
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  //Add state for fetching Books
  state = {
    library: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((library) => {
      this.setState({ library: library })
    })
  }


//Render the HTML
  render() {
    console.log(this.state.library);
    return (
      <div className="app">
        <Main />
      </div>
    )
  }
}

export default BooksApp
