import React from 'react'

import Search from './Search';

import Main from './Main';

import './App.css'


class BooksApp extends React.Component {

//Render the HTML
  render() {
    return (
      <div className="app">
        {/*<Main />*/}
        <Search />
      </div>
    )
  }
}

export default BooksApp
