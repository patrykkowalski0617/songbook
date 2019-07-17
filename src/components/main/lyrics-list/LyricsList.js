import React, { Component } from "react";
import LyricsItem from "./LyricsItem";

class LyricsList extends Component {
    lyricsItems = function() {
        if (this.props.searchResult.length) {
            return this.props.searchResult.map(lyricsNames => (
                <LyricsItem
                    key={lyricsNames.id}
                    lyricsName={lyricsNames.lyricsName}
                    getLyricsName={this.props.getLyricsName}
                />
            ));
        }
        return "Jeszcze nie znam tej pioseki :(";
    };
    lyricsItems = this.lyricsItems.bind(this);

    render() {
        return (
            <ul className={`lyrics-list ${this.props.displayLyricsList}`}>
                {this.lyricsItems()}
            </ul>
        );
    }
}

export default LyricsList;
