import React, { Component } from "react";
import styled from "styled-components";
import { colorScheme, focus } from "../../style";
import axios from "axios";
import { connect } from "react-redux";
import {
    lyricsListToggle,
    keepLyricsData,
    keepSearchResult
} from "./../../redux/actions";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { formValueSelector } from "redux-form";

const selector = formValueSelector("settings");

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
            const {
                colorSchemeNo,
                redux: { searchedValue, searchResult }
            } = this.props;

            const filteredLyricsList = this.filterLyricsList(
                searchedValue,
                this.reduceLyricsListJson(searchResult)
            );

            if (filteredLyricsList.length) {
                return filteredLyricsList.map((item, index) => {
                    return (
                        <li key={index}>
                            <LyricsItemButton
                                onClick={e => {
                                    this.getLyricsJson(e.target.innerText);
                                }}
                                colorSchemeNo={colorSchemeNo}
                            >
                                {item.lyricsName}
                            </LyricsItemButton>
                        </li>
                    );
                });
            } else {
                return "I don't know this song yet :(";
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
                .catch(err => {
                    if (err.response.status) {
                        alert(
                            'This is beta version and you can choose only "Kings of Leon - Sex On Fire".'
                        );
                    } else {
                        alert("Wystąpił nieoczekiwany błąd.");
                        console.log(err, err.response);
                    }
                });
        };
    }

    render() {
        const {
            redux: { displayLyricsList }
        } = this.props;

        return displayLyricsList ? (
            <PerfectScrollbar>
                <Ul>{this.lyricsList()}</Ul>
            </PerfectScrollbar>
        ) : null;
    }
}

const mapStateToProps = state => ({
    redux: state,
    colorSchemeNo: selector(state, "color_scheme_no") || 0
});

const mapDispatchToProps = {
    lyricsListToggle,
    keepLyricsData,
    keepSearchResult
};

export default connect(mapStateToProps, mapDispatchToProps)(LyricsList);
