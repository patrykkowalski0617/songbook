import React, { Component } from "react";
import styled from "styled-components";
import { space, row, col, colorScheme, focus, linkStyle } from "../../../style";
import { Metronom, LyricsBody } from "./";
import { connect } from "react-redux";
import Spotify from "spotify-web-api-js";
import { formValueSelector } from "redux-form";

const selector = formValueSelector("settings");

const spotifyApi = new Spotify();

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
    ${row}
`;

const LyricsDataContent = styled.span`
    ${col[0]}
`;

const H2 = styled.h2`
    margin-bottom: ${space.s2};
`;

const SpotifyIcon = styled.a`
    ${linkStyle()}
    ${props => {
        const no = props.colorSchemeNo;
        return focus(no);
    }}
    &:hover {
        color: ${props => colorScheme[props.colorSchemeNo].contrast1};
    }
`;

class Lyrics extends Component {
    playOnSpotify() {
        const {
            redux: { loggedIn }
        } = this.props;

        if (!loggedIn) {
            alert("You have to be logged-in");
        } else {
            const {
                redux: { lyricsData }
            } = this.props;

            spotifyApi
                .searchTracks(lyricsData.title)
                .then(data => {
                    window.open(data.tracks.items[0].external_urls.spotify);
                })
                .catch(err => console.log(err));
        }
    }

    render() {
        const {
            colorSchemeNo,
            redux: { lyricsData }
        } = this.props;

        return (
            <LyricsElement>
                <LyricsHeader>
                    <H2>{lyricsData.title}</H2>
                    <LyricsData>
                        <LyricsDataContent>
                            Tempo: {lyricsData.tempo}
                        </LyricsDataContent>
                        <LyricsDataContent>
                            Time: {lyricsData.time}
                        </LyricsDataContent>
                    </LyricsData>
                    <SpotifyIcon
                        colorSchemeNo={colorSchemeNo}
                        onClick={() => this.playOnSpotify()}
                    >
                        Odsłuchaj na Spotify
                        <i className="icon icon-spotify" />
                    </SpotifyIcon>
                </LyricsHeader>
                <LyricsBody />
                <Metronom />
            </LyricsElement>
        );
    }
}

const mapStateToProps = state => ({
    redux: state,
    colorSchemeNo: selector(state, "color_scheme_no") || 0
});

export default connect(mapStateToProps)(Lyrics);
