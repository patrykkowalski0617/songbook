import React, { Component } from "react";

import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../Footer";
import lyrics_list from "../../data/lyrics_list";
import filterLyricsList from "./logic/filterLyricsList";
import getLyricsItems from "./logic/getLyricsItems";

const lyricsList = getLyricsItems(lyrics_list);

class App extends Component {
  state = { displayLyricsList: false, searchResult: lyricsList };

  displayLyricsList(callback) {
    this.setState({ displayLyricsList: !this.state.displayLyricsList });
  }
  displayLyricsList = this.displayLyricsList.bind(this);

  searchClick(value) {
    const searchResult = filterLyricsList(value, lyricsList);
    this.setState({ searchResult: searchResult });
  }
  searchClick = this.searchClick.bind(this);

  render() {
    return (
      <div>
        <Header
          displayLyricsList={this.displayLyricsList}
          searchClick={this.searchClick}
        />
        <Main
          display={this.state.displayLyricsList ? "anim-show" : "anim-hide"}
          searchResult={this.state.searchResult}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
