import React, { Component } from "react";
import styled from "styled-components";
import v from "../../style_abstract/variables";

const LyricsSectionElement = styled.div`
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

const SectionContent = styled.div`
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

class LyricsSection extends Component {
    ref = React.createRef();

    componentDidMount() {
        this.props.getLyricsSections(this.ref.current);
    }

    render() {
        return (
            <LyricsSectionElement className={"lyrics-section"} ref={this.ref}>
                <SectionContent
                    className={`section-content ${this.props.sectionName}`}
                >
                    <p className="lyrics-chords">{this.props.chords}</p>
                    <p className="lyrics-text">{this.props.text}</p>
                </SectionContent>
            </LyricsSectionElement>
        );
    }
}

export default LyricsSection;
