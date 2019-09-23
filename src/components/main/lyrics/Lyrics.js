import React, { Component } from "react";
import styled from "styled-components";
import { space, grid } from "../../style";
import Metronom from "./Metronom";
import LyricsBody from "./LyricsBody";
import { connect } from "react-redux";

const LyricsElement = styled.div`
    position: absolute;
    left: ${space.s2};
    right: ${space.s2};
    top: 50%;
    transform: translateY(-50%);
`;

const LyricsHeader = styled.div`
    margin: ${space.s4} 0;
`;

const LyricsData = styled.p`
    ${grid.row}
`;

const LyricsDataContent = styled.span`
    ${grid.col[0]}
`;

const H2 = styled.h2`
    margin-bottom: ${space.s2};
`;

class Lyrics extends Component {
    render() {
        const { lyricsData } = this.props.redux;

        return (
            <LyricsElement>
                <LyricsHeader>
                    <H2>
                        {lyricsData.title}
                        <a
                            href={lyricsData.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="icon icon-youtube" />
                        </a>
                    </H2>
                    <LyricsData>
                        <LyricsDataContent>
                            Tempo: {lyricsData.tempo}
                        </LyricsDataContent>
                        <LyricsDataContent>
                            Time: {lyricsData.time}
                        </LyricsDataContent>
                    </LyricsData>
                </LyricsHeader>
                <LyricsBody />
                <Metronom />
            </LyricsElement>
        );
    }
}

const mapStateToProps = state => {
    return { redux: state };
};
export default connect(mapStateToProps)(Lyrics);
