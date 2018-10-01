import React from "react";
import cx from "classnames";
class Details extends React.Component {
  constructor() {
    super();
    this.state = { info: {}, detailsOn: false };

    this.detailsFetch = this.detailsFetch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.setState({
      detailsOn: !this.state.detailsOn
    });
  }

  detailsFetch() {
    fetch(
      `http://www.omdbapi.com/?i=${
        this.props.movie.imdbID
      }&apikey=dd68f9f&plot=full`
    )
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.setState({
          info: data
        });
      });
  }

  componentDidMount() {
    this.detailsFetch();
  }

  render() {
    console.log(this.state.info);

    const buttonClassSwitch = cx("details", {
      "details--on": this.state.detailsOn == true
    });

    return (
      <div>
        <button className="more" onClick={this.handleClick}>
          {this.state.detailsOn ? "Less" : "More"}
        </button>

        <div className={buttonClassSwitch}>
          <p>Starring: {this.state.info.Actors}</p>
          <p>Plot: {this.state.info.Plot}</p>
        </div>
      </div>
    );
  }
}

export default Details;
