import React from "react";
import Details from "./Details";
class Poster extends React.Component {
  render() {
    return (
      <div>
        <h1 className="movie-title">
          {this.props.movie.Title} ({this.props.movie.Year})
        </h1>
        <img className="movie-images" src={this.props.movie.Poster} />
        <Details movie={this.props.movie} />
      </div>
    );
  }
}

export default Poster;
