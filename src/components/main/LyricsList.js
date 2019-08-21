import React, { Component } from "react";
import styled from "styled-components";

const LyricsItemButton = styled.button`
    background: none;
    border: none;
    margin: 0.3rem;
    cursor: pointer;
    text-align: left;
    line-height: 150%;
`;

class LyricsList extends Component {
    lyricsItems = function() {
        if (this.props.searchResult.length) {
            return this.props.searchResult.map((lyricsNames, index) => {
                return (
                    <li key={index}>
                        <LyricsItemButton
                            onClick={e =>
                                this.props.getLyricsJson(e.target.innerText)
                            }
                        >
                            {lyricsNames.lyricsName}
                        </LyricsItemButton>
                    </li>
                );
            });
        }
        return "Jeszcze nie znam tej pioseki :(";
    };

    componentDidUpdate() {
        if (this.firstButtonRef) {
            this.firstButtonRef.focus();
        }
    }

    render() {
        return this.props.displayLyricsList ? (
            <ul>{this.lyricsItems()}</ul>
        ) : (
            ""
        );
    }
}

export default LyricsList;
