import React, { Component } from "react";
import LyricsBody from "./LyricsBody";

class Lyrics extends Component {
  render() {
    const text = this.props.lyrics.body[this.props.barSet].text[this.props.bar];
    const chords = this.props.lyrics.body[this.props.barSet].chords[
      this.props.bar
    ];
    return (
      <div>
        <div className="lyrics-header">
          <h2>{this.props.lyrics.title}</h2>
          <p className="lyrics-info row">
            <span className="lyrics-info-item col">
              Tempo: {this.props.lyrics.tempo}
            </span>
            <span className="lyrics-info-item col">
              Time: {this.props.lyrics.time}
            </span>
            <a
              className="lyrics-info-item col"
              href={this.props.lyrics.link}
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
