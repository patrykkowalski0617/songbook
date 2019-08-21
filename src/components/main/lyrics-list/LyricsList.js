import React from "react";
import styled from "styled-components";

const LyricsItemButton = styled.button`
    background: none;
    border: none;
    margin: 0.3rem;
    cursor: pointer;
    text-align: left;
    line-height: 150%;
`;

const LyricsList = function(props) {
    const lyricsItems = function() {
        if (props.searchResult.length) {
            return props.searchResult.map(lyricsNames => (
                <li key={lyricsNames.id}>
                    <LyricsItemButton
                        onClick={e => props.getLyricsJson(e.target.innerText)}
                    >
                        {lyricsNames.lyricsName}
                    </LyricsItemButton>
                </li>
            ));
        }
        return "Jeszcze nie znam tej pioseki :(";
    };

    return props.displayLyricsList ? <ul>{lyricsItems()}</ul> : "";
};

export default LyricsList;
