import React, { Component } from "react";
import styled from "styled-components";
import { colorScheme, focus } from "../style";
import axios from "axios";
import { connect } from "react-redux";
import {
    lyricsListToggle,
    keepLyricsData,
    keepSearchResult
} from "./../../redux/actions";

const Ul = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
`;

const LyricsItemButton = styled.button`
    background: none;
    border: none;
    margin: 0.3rem;
    cursor: pointer;
    text-align: left;
    line-height: 150%;
    color: ${props => colorScheme[props.colorSchemeNo].light1};
    ${props => {
        const no = props.colorSchemeNo;
        return focus(no);
    }}
`;

class LyricsList extends Component {
    componentWillMount() {
        const { keepSearchResult } = this.props;

        this.getLyricsListJson = lyricsName => {
            const filePath = `data/lyrics_list.json`;

            axios
                .get(filePath)
                .then(res => {
                    const data = res.data;
                    keepSearchResult(data);
                })
                .catch(() => alert("Nie można załadować listy piosenek"));
        };

        this.getLyricsListJson();
    }

    componentDidMount() {
        this.reduceLyricsListJson = lyricsListJson => {
            const pairedNames = lyricsListJson.map(item => {
                return item.songs.map(song => {
                    return {
                        lyricsName: item.artist + " - " + song.name,
                        fileVersion: song.fileVersion
                    };
                });
            });
            const reducedPairedNames = pairedNames.reduce((total, item) => {
                const arr = total.concat(item),
                    addId = a => {
                        for (let i = 0; i < a.length; i++) {
                            a[i].id = i;
                        }

                        return a;
                    };

                return addId(arr);
            });

            reducedPairedNames.sort((a, b) => {
                return a.lyricsName < b.lyricsName ? -1 : 1;
            });

            return reducedPairedNames;
        };

        this.filterLyricsList = (searchedValue, lyricsList) => {
            const filterLyricsList = searchedValue => {
                const filteredList = lyricsList.filter(item =>
                    item.lyricsName
                        .toLowerCase()
                        .includes(searchedValue.toLowerCase())
                );

                return filteredList;
            };

            const searchResult = filterLyricsList(searchedValue);

            return searchResult;
        };

        this.lyricsList = () => {
            const filteredLyricsList = this.filterLyricsList(
                this.props.redux.searchedValue,
                this.reduceLyricsListJson(this.props.redux.searchResult)
            );

            if (filteredLyricsList.length) {
                return filteredLyricsList.map((item, index) => {
                    return (
                        <li key={index}>
                            <LyricsItemButton
                                onClick={e => {
                                    this.getLyricsJson(e.target.innerText);
                                }}
                                colorSchemeNo={this.props.redux.colorSchemeNo}
                            >
                                {item.lyricsName}
                            </LyricsItemButton>
                        </li>
                    );
                });
            } else {
                return "Jeszcze nie znam tej pioseki :(";
            }
        };

        this.getLyricsJson = lyricsName => {
            const fileFormat = "json";
            const fileName = lyricsName.toLowerCase().replace(/ /g, "_");
            const filePath = `lyrics/${fileName}.${fileFormat}`;

            axios
                .get(filePath)
                .then(res => {
                    const lyricsData = res.data;
                    this.props.lyricsListToggle();
                    this.props.keepLyricsData(lyricsData);
                })
                .catch(() =>
                    alert(
                        'W tej chwili działa tylko "Kings of Leon - Sex On Fire"'
                    )
                );
        };
    }

    render() {
        const { displayLyricsList } = this.props.redux;

        return displayLyricsList ? <Ul>{this.lyricsList()}</Ul> : null;
    }
}

const mapStateToProps = state => {
    return { redux: state };
};
const mapDispatchToProps = {
    lyricsListToggle,
    keepLyricsData,
    keepSearchResult
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LyricsList);
