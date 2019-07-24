import React, { Component } from "react";
import LyricsItem from "./LyricsItem";

class LyricsList extends Component {
    lyricsItems = function() {
        if (this.props.searchResult.length) {
            return this.props.searchResult.map(lyricsNames => (
                <LyricsItem
                    key={lyricsNames.id}
                    lyricsName={lyricsNames.lyricsName}
                    getLyricsJson={this.props.getLyricsJson}
                />
            ));
        }
        return "Jeszcze nie znam tej pioseki :(";
    };
    lyricsItems = this.lyricsItems.bind(this);

    render() {
        return this.props.displayLyricsList ? (
            <ul className={`lyrics-list`}>{this.lyricsItems()}</ul>
        ) : (
            ""
        );
    }
}

export default LyricsList;
