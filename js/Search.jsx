import React, { Component } from "react";
import preload from "../data.json";
import ShowCard from "./ShowCard";

class Search extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     searchTerm: "This is a debug statement"
  //   };

  //   // this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  // }

  // handleSearchTermChange(event){
  //   this.setState({searchTerm: event.target.value});
  // }

  state = {
    searchTerm: ""
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>Search Library</h1>
          <input
            type="text"
            placeholder="Search"
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
          />
        </header>
        <div>
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
