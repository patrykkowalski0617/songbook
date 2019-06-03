import React, { Component } from "react";
import "./css/App.css";
import "./data/lyrics_list.json";
import "./logic/filterLyricsList";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer";
import lyrics_list from "./data/lyrics_list";
import filterLyricsList from "./logic/filterLyricsList";
import allLyricsItems from "./logic/allLyricsItems";

class App extends Component {
  handleClick = this.handleClick.bind(this);

  state = { displayLyricsList: false };

  handleClick(callback) {
    console.log("test in App");
    this.setState({ displayLyricsList: !this.state.displayLyricsList });
  }

  searchClick(value) {
    const lyricsList = allLyricsItems(lyrics_list);
    console.log(filterLyricsList(value, lyricsList));
  }

  render() {
    return (
      <div>
        <Header onClick={this.handleClick} searchClick={this.searchClick} />
        <Main display={this.state.displayLyricsList ? "block" : "none"} />
        <Footer />
      </div>
    );
  }
}

export default App;
