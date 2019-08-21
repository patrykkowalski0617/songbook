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
    _input = null;

    lyricsItems = function() {
        if (this.props.searchResult.length) {
            return this.props.searchResult.map((lyricsNames, index) => {
                return (
                    <li key={index}>
                        <LyricsItemButton
                            onClick={e =>
                                this.props.getLyricsJson(e.target.innerText)
                            }
                            ref={c => {
                                if (
                                    index === 0 &&
                                    this.props.lyricsListAutoFocus
                                ) {
                                    this._input = c;
                                }
                            }}
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
        if (this._input) {
            this._input.focus();
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
