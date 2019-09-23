import React from "react";
import styled from "styled-components";
import { media } from "../../style";

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
    @media (max-width: ${media.l}) {
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
`;

const BarSection = styled.p`
    height: 35px;
    line-height: 35px;
    vertical-align: middle;
`;

const LyricsBar = props => {
    const { barType, chords, text } = props;

    // className lyrics-bar and bar-content are instead of rel
    // and are needed for animation scripts
    return (
        <LyricsBarElement className={"lyrics-bar"}>
            <BarContent className={`bar-content ${barType}`}>
                <BarSection>{chords}</BarSection>
                <BarSection>{text}</BarSection>
            </BarContent>
        </LyricsBarElement>
    );
};

export default LyricsBar;
