import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import {
    lyricsListToggle,
    keepLyricsData,
    keepSearchResult
} from "./../../redux/actions";

const LyricsItemButton = styled.button`
    background: none;
    border: none;
    margin: 0.3rem;
    cursor: pointer;
    text-align: left;
    line-height: 150%;
`;

class LyricsList extends Component {
    componentWillMount() {
        this.getLyricsListJson = lyricsName => {
            const filePath = `data/lyrics_list.json`;

            axios
                .get(filePath)
                .then(res => {
                    const data = res.data;
                    this.props.keepSearchResult(data);
                })
                .catch(() => alert("Nie można załadować listy piosenek"));
        };
        this.getLyricsListJson();
    }

    componentDidMount() {
        this.reduceLyricsListJson = lyricsListJson => {
            const pairedNames = lyricsListJson.map(item => {
                return item.songs.map(function(song) {
                    return {
                        lyricsName: item.artist + " - " + song.name,
                        fileVersion: song.fileVersion
                    };
                });
            });
            const reducedPairedNames = pairedNames.reduce(function(
                total,
                item
            ) {
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
            if (this.props.redux.searchResult.length) {
                return filteredLyricsList.map((item, index) => {
                    return (
                        <li key={index}>
                            <LyricsItemButton
                                onClick={e => {
                                    this.getLyricsJson(e.target.innerText);
                                }}
                            >
                                {item.lyricsName}
                            </LyricsItemButton>
                        </li>
                    );
                });
            }
            return "Jeszcze nie znam tej pioseki :(";
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
        return this.props.redux.displayLyricsList ? (
            <ul>{this.lyricsList()}</ul>
        ) : (
            ""
        );
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
