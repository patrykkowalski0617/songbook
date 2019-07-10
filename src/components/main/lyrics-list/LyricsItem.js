import React from "react";

function LyricsItem(props) {
    const style = {
        background: "none",
        border: "none",
        margin: ".3rem",
        cursor: "pointer"
    };
    return (
        <li>
            <button
                style={style}
                onClick={e => props.handleClick(e.target.innerText)}
            >
                {props.lyricsName}
            </button>
        </li>
    );
}

export default LyricsItem;
