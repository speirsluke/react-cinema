import React from "react";
import Poster from "./Poster";

class PostersAndTitles extends React.Component {
  render() {
    return (
      <div className="results">
        {this.props.array.map(function(movie) {
          return (
            <div className="movie-div" key={movie.imdbID}>
              <Poster movie={movie} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PostersAndTitles;
