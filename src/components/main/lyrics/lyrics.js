import React, { Component } from "react";
import LyricsBody from "./LyricsBody";
import Counter from "./logic/Counter";

import kings_of_leon_sex_on_fire from "../../../data/lyrics/kings_of_leon_-_sex_on_fire";

class Lyrics extends Component {
  state = { bar: 0, barSet: 0 };

  lyrics = kings_of_leon_sex_on_fire;

  upadteLyricsBody = function() {
    console.log(
      `chords[${this.counter.clock.bar}]:`,
      `body[${this.counter.clock.barSet}]:`
    );
    this.setState({
      bar: this.counter.clock.bar,
      barSet: this.counter.clock.barSet
    });
  };
  upadteLyricsBody = this.upadteLyricsBody.bind(this);

  componentDidMount() {
    this.counter = new Counter(
      () => this.upadteLyricsBody(), // callback
      this.lyrics.tempo,
      4,
      0
    );
  }

  render() {
    const text = this.lyrics.body[this.state.barSet].text[this.state.bar];
    const chords = this.lyrics.body[this.state.barSet].chords[this.state.bar];
    return (
      <div>
        <button
          onClick={() => this.counter.toggle(this.lyrics.body[1].chords.length)}
        >
          start/stop
        </button>
        <div className="lyrics-header">
          <h2>{this.lyrics.title}</h2>
          <p className="lyrics-info row">
            <span className="lyrics-info-item col">
              Tempo: {this.lyrics.tempo}
            </span>
            <span className="lyrics-info-item col">
              Time: {this.lyrics.time}
            </span>
            <a
              className="lyrics-info-item col"
              href={this.lyrics.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>YT</i>
            </a>
          </p>
        </div>
        <LyricsBody text={text} chords={chords} />
      </div>
    );
  }
}

export default Lyrics;
