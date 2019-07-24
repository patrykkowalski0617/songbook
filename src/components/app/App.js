import React, { Component } from "react";

import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import lyrics_list from "./data/lyrics_list";
import filterLyricsList from "./logic/filterLyricsList";
import getLyricsItems from "./logic/getLyricsItems";
import Counter from "./logic/counter";
import axios from "axios";

class App extends Component {
    lyricsList = getLyricsItems(lyrics_list);
    state = {
        displayLyricsList: false,
        displayPlayButton: false,
        displayHeaderButtons: [true, false],
        displayLyrics: false,
        headerButtonsIconIndex: [0, 0],
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

    searchClick(value) {
        const lyricsList = this.lyricsList.slice();
        const searchResult = filterLyricsList(value, lyricsList);
        this.setState({ searchResult: searchResult });
    }
    searchClick = this.searchClick.bind(this);

    getLyricsJson = function(lyricsName) {
        const tt = this;
        const fileFormat = "json";
        const fileName = lyricsName.toLowerCase().replace(/ /g, "_");
        const filePath = `lyrics/${fileName}.${fileFormat}`;

        axios.get(filePath).then(res => {
            const lyricsData = res.data;
            tt.counter = new Counter(res.data);
            tt.counter.data.callbackOn.lyricsEnd = () => tt.switchIcon(1);
            tt.setState({ lyricsData: lyricsData });
            tt.setState({ displayPlayButton: true });
            tt.setState({ displayLyrics: true });
        });
    };

    getLyricsName(lyricsName) {
        this.getLyricsJson(lyricsName);
        this.setState({
            displayLyricsList: false,
            displayHeaderButtons: [true, true]
        });
        this.switchIcon(0);
    }
    getLyricsName = this.getLyricsName.bind(this);

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

    switchIcon(buttonIndex) {
        let currentSate = this.state.headerButtonsIconIndex.slice();
        let iconIndex = currentSate[buttonIndex];

        if (iconIndex < this.buttonData.icons[buttonIndex].length - 1) {
            iconIndex++;
        } else {
            iconIndex = 0;
        }
        currentSate[buttonIndex] = iconIndex;

        this.setState({ headerButtonsIconIndex: currentSate });
    }
    switchIcon = this.switchIcon.bind(this);

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
                />
                <Main
                    displayLyricsList={this.state.displayLyricsList}
                    searchResult={this.state.searchResult}
                    getLyricsName={this.getLyricsName}
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
