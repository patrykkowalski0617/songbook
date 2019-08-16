import React from "react";
import LyricsItem from "./LyricsItem";

const LyricsList = function(props) {
    const lyricsItems = function() {
        if (props.searchResult.length) {
            return props.searchResult.map(lyricsNames => (
                <LyricsItem
                    key={lyricsNames.id}
                    lyricsName={lyricsNames.lyricsName}
                    getLyricsJson={props.getLyricsJson}
                />
            ));
        }
        return "Jeszcze nie znam tej pioseki :(";
    };

    return props.displayLyricsList ? <ul>{lyricsItems()}</ul> : "";
};

export default LyricsList;
