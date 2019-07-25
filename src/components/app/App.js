import React, { Component } from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import lyrics_list from "./data/lyrics_list";
import filterLyricsList from "./logic/filterLyricsList";
import getLyricsItems from "./logic/getLyricsItems";
import getLyricsJson from "./logic/getLyricsJson";
import switchIcon from "./logic/switchIcon";

class App extends Component {
    lyricsList = getLyricsItems(lyrics_list);

    state = {
        displayLyricsList: false,
        displayPlayButton: false,
        displayHeaderButtons: [true, false],
        displayLyrics: false,
        headerButtonsIconIndex: [0, 0],
        headerFocusedButtounIndex: 0,
        searchResult: this.lyricsList,
        lyricsData: null
    };

    display = {
        lyricsList: function() {
            let displayPlayButton;
            if (this.state.displayPlayButton) {
                displayPlayButton = !this.state.displayHeaderButtons[1];
            }

            const displayLyrics = !this.state.displayLyrics;

            this.setState({
                displayLyricsList: !this.state.displayLyricsList,
                displayHeaderButtons: [true, displayPlayButton],
                displayLyrics: displayLyrics
            });
        }.bind(this)
    };

    buttonData = {
        // possible icons for each button
        icons: [["lyrics-list", "close"], ["play", "pause"]],
        // methods for each button
        methods: [
            () => {
                this.display.lyricsList();
            },
            () => {
                this.counter.action.toggle();
            }
        ]
    };

    switchIcon = switchIcon(this);

    getLyricsJson = getLyricsJson(this);

    searchClick(value) {
        const lyricsList = this.lyricsList.slice();
        const searchResult = filterLyricsList(value, lyricsList);
        this.setState({ searchResult: searchResult });
    }
    searchClick = this.searchClick.bind(this);

    render() {
        return (
            <div>
                <Header
                    displayLyricsList={this.state.displayLyricsList}
                    displayHeaderButtons={this.state.displayHeaderButtons}
                    searchClick={this.searchClick}
                    counter={this.counter}
                    headerButtonsIconIndex={this.state.headerButtonsIconIndex}
                    switchIcon={this.switchIcon}
                    buttonData={this.buttonData}
                    headerFocusedButtounIndex={
                        this.state.headerFocusedButtounIndex
                    }
                />
                <Main
                    displayLyricsList={this.state.displayLyricsList}
                    searchResult={this.state.searchResult}
                    getLyricsJson={this.getLyricsJson}
                    lyricsData={this.state.lyricsData}
                    counter={this.counter}
                    displayLyrics={this.state.displayLyrics}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
