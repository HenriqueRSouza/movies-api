import React, { Component } from 'react';
import MovieRow from './Rows/MovieRow.js'
import $ from 'jquery'

import './App.css';
import './reset.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}

    this.performSearch("")
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        
        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })
        console.log(movieRows);
        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <div className="text">             
                          
            <h1>Movies API</h1>
             
            <input className="input" onChange={this.searchChangeHandler.bind(this)} placeholder="Search your movie"/>  
          </div>
        </div>      
      {this.state.rows}

      </div>
    );
  }
}

export default App;