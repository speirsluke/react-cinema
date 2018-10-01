import React from "react";
import Search from "./Search";
import PostersAndTitles from "./PostersAndTitles";
import cx from "classnames";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filmSearch: "Banana",
      pageNumber: 1,
      movieArray: []
    };

    this.filmFetch = this.filmFetch.bind(this);
    this.clickHandleNext = this.clickHandleNext.bind(this);
    this.clickHandlePrev = this.clickHandlePrev.bind(this);
    this.recieveSearch = this.recieveSearch.bind(this);
  }

  componentDidMount() {
    this.filmFetch(this.state.filmSearch, this.state.pageNumber);
  }

  filmFetch(searchWord, page) {
    fetch(
      `http://www.omdbapi.com/?s=${searchWord}&apikey=dd68f9f&page=${page}&plot=short`
    )
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        this.setState({
          filmSearch: searchWord,
          movieArray: data.Search
        });
        // console.log(this.state.movieArray);
      });
  }

  recieveSearch(searchValue) {
    this.setState(
      {
        filmSearch: searchValue
      },
      () => this.filmFetch(this.state.filmSearch, this.filmFetch.pageNumber)
    );
  }

  clickHandleNext(event) {
    event.preventDefault();
    this.setState(
      {
        pageNumber: this.state.pageNumber + 1
      },
      () => this.filmFetch(this.state.filmSearch, this.state.pageNumber)
    );
  }

  clickHandlePrev(event) {
    event.preventDefault();
    this.setState(
      {
        pageNumber: this.state.pageNumber - 1
      },
      this.filmFetch(this.state.filmSearch, this.state.pageNumber)
    );
  }

  render() {
    const prevSwitch = cx("prev", {
      "prev--on": this.state.pageNumber > 1
    });
    return (
      <div>
        <div className="grid">
          <Search extractSearch={this.recieveSearch} />
          <PostersAndTitles array={this.state.movieArray} />
        </div>
        <div className="pagination">
          <div className="next" onClick={this.clickHandleNext}>
            next
          </div>
          <div className={prevSwitch} onClick={this.clickHandlePrev}>
            prev
          </div>
        </div>
      </div>
    );
  }
}

export default App;
