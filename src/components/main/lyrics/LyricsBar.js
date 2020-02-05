import React from "react";
import styled from "styled-components";
import { media, lyricsBarH } from "../../../style";

const LyricsBarElement = styled.div`
    height: ${lyricsBarH};
    font-size: 30px;
    position: relative;
    width: 100%;
    overflow: hidden;
    transition: 0.3s opacity ease-in-out;
    @media (max-width: ${media.m}) {
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

const LyricsBar = ({ barType, chords, text, style }) => {
    // className lyrics-bar and bar-content are instead of rel
    // and are needed for animation scripts
    return (
        <LyricsBarElement className={"lyrics-bar"} style={style}>
            <BarContent className={`bar-content ${barType}`}>
                <BarSection>{chords}</BarSection>
                <BarSection>{text}</BarSection>
            </BarContent>
        </LyricsBarElement>
    );
};

export default LyricsBar;
