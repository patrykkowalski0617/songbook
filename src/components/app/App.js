import React, { Component } from "react";

import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../Footer";
import lyrics_list from "../../data/lyrics_list";
import filterLyricsList from "./logic/filterLyricsList";
import getLyricsItems from "./logic/getLyricsItems";
import Counter from "./logic/Counter";
import kings_of_leon_sex_on_fire from "../../data/lyrics/kings_of_leon_-_sex_on_fire";

class App extends Component {
  lyricsList = getLyricsItems(lyrics_list);
  state = {
    displayLyricsList: false,
    searchResult: this.lyricsList,
    bar: 0,
    barSet: 0
  };

  displayLyricsList(callback) {
    this.setState({ displayLyricsList: !this.state.displayLyricsList });
  }
  displayLyricsList = this.displayLyricsList.bind(this);

  lyrics = kings_of_leon_sex_on_fire;

  counter = new Counter(
    () => this.upadteLyricsBody(),
    this.lyrics.tempo,
    this.lyrics.time,
    0
  );

  upadteLyricsBody = function() {
    this.setState({
      bar: this.counter.clock.bar,
      barSet: this.counter.clock.barSet
    });
  };
  upadteLyricsBody = this.upadteLyricsBody.bind(this);

  searchClick(value) {
    const lyricsList = this.lyricsList.slice();
    const searchResult = filterLyricsList(value, lyricsList);
    this.setState({ searchResult: searchResult });
  }
  searchClick = this.searchClick.bind(this);

  counterToggle() {
    this.counter.toggle(this.lyrics.body[1].chords.length);
  }
  counterToggle = this.counterToggle.bind(this);

  counterStop() {
    this.counter.stop();
  }
  counterStop = this.counterStop.bind(this);

  render() {
    return (
      <div>
        <Header
          displayLyricsList={this.displayLyricsList}
          searchClick={this.searchClick}
          counterToggle={this.counterToggle}
          counterStop={this.counterStop}
        />
        <Main
          display={this.state.displayLyricsList ? "anim-show" : "anim-hide"}
          searchResult={this.state.searchResult}
          lyrics={this.lyrics}
          bar={this.state.bar}
          barSet={this.state.barSet}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
