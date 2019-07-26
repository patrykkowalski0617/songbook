import React, { Component } from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import lyrics_list from "./data/lyrics_list";
import searchClick from "./logic/searchClick";
import getLyricsItems from "./logic/getLyricsItems";
import getLyricsJson from "./logic/getLyricsJson";
import switchIcon from "./logic/switchIcon";
import displayLyricsList from "./logic/displayLyricsList";

class App extends Component {
    lyricsList = getLyricsItems(lyrics_list);

    state = {
        displayLyricsList: false,
        displayPlayButton: false,
        displayHeaderButtons: [true, false],
        displayLyrics: false,
        displayWelcomeInfo: true,
        headerButtonsIconIndex: [0, 0],
        headerFocusedButtounIndex: 0,
        searchResult: this.lyricsList,
        lyricsData: null
    };

    buttonData = {
        // possible icons for each button
        icons: [["lyrics-list", "close"], ["play", "pause"]],
        // methods for each button
        methods: [
            () => {
                this.displayLyricsList();
            },
            () => {
                this.counter.action.toggle();
            }
        ]
    };

    displayLyricsList = displayLyricsList(this);

    switchIcon = switchIcon(this);

    getLyricsJson = getLyricsJson(this);

    searchClick = searchClick(this, this.lyricsList);

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
                    displayWelcomeInfo={this.state.displayWelcomeInfo}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
