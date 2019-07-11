import React from "react";
import LyricsItem from "./LyricsItem";

const LyricsList = props => {
    const handleClick = function(buttonText) {
        console.log(buttonText);
    };
    const lyricsItems = function() {
        if (props.searchResult.length) {
            return props.searchResult.map(lyricsNames => (
                <LyricsItem
                    key={lyricsNames.id}
                    lyricsName={lyricsNames.lyricsName}
                    handleClick={handleClick}
                />
            ));
        }
        return "Jeszcze nie znam tej pioseki :(";
    };
    return (
        <ul className={`lyrics-list ${props.displayLyricsList}`}>
            {lyricsItems()}
        </ul>
    );
};

export default LyricsList;
