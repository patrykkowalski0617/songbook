import React from "react";
import styled from "styled-components";

export const LyricsItemButton = styled.button`
    background: none;
    border: none;
    margin: 0.3rem;
    cursor: pointer;
    text-align: left;
    line-height: 150%;
`;

function LyricsItem(props) {
    return (
        <li>
            <LyricsItemButton
                onClick={e => props.getLyricsJson(e.target.innerText)}
            >
                {props.lyricsName}
            </LyricsItemButton>
        </li>
    );
}

export default LyricsItem;
