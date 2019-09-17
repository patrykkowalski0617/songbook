import React, { Component } from "react";
import styled from "styled-components";
import v from "../../style_abstract/variables";

const LyricsBarElement = styled.div`
    height: 80px;
    font-size: 30px;
    position: relative;
    &:first-child {
        margin-top: 80px;
    }
    &:last-child {
        margin-bottom: 80px;
    }
    @media (max-width: ${v.media.l}) {
        font-size: 20px;
    }
`;

const BarContent = styled.div`
    text-align: center;
    height: 70px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    &.chorus {
        font-style: italic;
        color: ${v.color.mintdark};
    }
    .lyrics-text,
    .lyrics-chords {
        height: 35px;
        line-height: 35px;
        vertical-align: middle;
    }
`;

class LyricsBar extends Component {
    ref = React.createRef();

    // componentDidMount() {
    //     this.props.getLyricsBars(this.ref.current);
    // }

    render() {
        return (
            <LyricsBarElement className={"lyrics-bar"} ref={this.ref}>
                <BarContent className={`bar-content ${this.props.barType}`}>
                    <p className="lyrics-chords">{this.props.chords}</p>
                    <p className="lyrics-text">{this.props.text}</p>
                </BarContent>
            </LyricsBarElement>
        );
    }
}

export default LyricsBar;
