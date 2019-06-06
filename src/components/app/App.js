import React, { Component } from "react";
import "../../css/App.css";

import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../Footer";
import lyrics_list from "../../data/lyrics_list";
import filterLyricsList from "../../logic/filterLyricsList";
import getLyricsItems from "../../logic/getLyricsItems";

const lyricsList = getLyricsItems(lyrics_list);

class App extends Component {
  handleClick = this.handleClick.bind(this);

  state = { displayLyricsList: false, searchResult: lyricsList };

  handleClick(callback) {
    console.log("test in App");
    this.setState({ displayLyricsList: !this.state.displayLyricsList });
  }

  searchClick(value) {
    const searchResult = filterLyricsList(value, lyricsList);
    this.setState({ searchResult: searchResult });
  }
  searchClick = this.searchClick.bind(this);

  render() {
    return (
      <div>
        <Header onClick={this.handleClick} searchClick={this.searchClick} />
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
