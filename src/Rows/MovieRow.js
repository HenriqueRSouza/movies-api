import React from 'react';
import Button from '../Button/Button';
import About from '../About/About'

import './MovieRow.css'

class MovieRow extends React.Component {
  
  viewMovie() {
    
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  } 
  render() {

    return <table key={this.props.movie.id} className="container-poster">

    <div className="container">
      <div className="posters">
        <div className="text-img"> 
        
          <img alt="poster" src={this.props.movie.poster_src}/>

          <h3>{this.props.movie.title}</h3>
          <p>{this.props.movie.overview}</p>
            <div>
              <Button 
                onClick={this.viewMovie.bind(this)} 
                className="btns"
                buttonStyle='btn--transition'
                buttonSize="btn--circle"
              >
                More
              </Button>
              <a
                href={("https://www.youtube.com/results?search_query=+") + this.props.movie.title}
                className="btns"
                buttonStyle='btn--transition'
                buttonSize="btn--circle"
              >
                View a trailer
              </a>
            </div>
        </div>
      </div>
    </div>
  </table>
  }
}

export default MovieRow