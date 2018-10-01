import React from "react";

class Search extends React.Component {
  constructor() {
    super();

    this.state = { searchValue: "" };

    this.changeHandle = this.changeHandle.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  }

  submitHandle(event) {
    event.preventDefault();
    this.props.extractSearch(this.state.searchValue);
  }

  changeHandle(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  render() {
    return (
      <div className="searchbar">
        <div className="page-name">
          <h1>BananaMovies.com</h1>
        </div>
        <div className="search-input-div">
          <form onSubmit={this.submitHandle}>
            <input
              className="search-input"
              type="text"
              placeholder="Search for movies"
              onChange={this.changeHandle}
            />

            <input className="submit-button" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
