import React, { Component } from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import lyrics_list from "./data/lyrics_list";
import searchClick from "./logic/searchClick";
import getLyricsItems from "./logic/getLyricsItems";
import switchButtonIcon from "./logic/switchButtonIcon";
import getLyricsJson from "./logic/getLyricsJson";
import displayLyricsList from "./logic/displayLyricsList";

class App extends Component {
    lyricsList = getLyricsItems(lyrics_list);

    state = {
        displayLyricsList: false,
        displayHeaderButtons: [true, false],
        displayLyrics: false,
        displayWelcomeInfo: true,
        headerFocusedButtounIndex: 0,
        buttonsOnStates: [true, true],
        searchResult: this.lyricsList,
        lyricsData: null
    };

    buttonsData = [
        {
            onIcon: "lyrics-list",
            offIcon: "close",
            onClickHandler: () => this.displayLyricsList()
        },
        {
            onIcon: "play",
            offIcon: "pause",
            onClickHandler: () => this.counter.action.toggle()
        }
    ];

    displayLyricsList = displayLyricsList(this);

    getLyricsJson = getLyricsJson(this);

    switchButtonIcon = switchButtonIcon(this);

    searchClick = searchClick(this, this.lyricsList);

    render() {
        return (
            <div>
                <Header
                    displayLyricsList={this.state.displayLyricsList}
                    displayHeaderButtons={this.state.displayHeaderButtons}
                    searchClick={this.searchClick}
                    counter={this.counter}
                    buttonsData={this.buttonsData}
                    buttonsOnStates={this.state.buttonsOnStates}
                    switchButtonIcon={index => this.switchButtonIcon(index)}
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
