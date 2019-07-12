import React, { Component } from "react";

import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../Footer";
import lyrics_list from "../../data/lyrics_list";
import filterLyricsList from "./logic/filterLyricsList";
import getLyricsItems from "./logic/getLyricsItems";

class App extends Component {
    lyricsList = getLyricsItems(lyrics_list);
    state = {
        displayLyricsList: false,
        displayHeaderButtons: [true, false],
        searchResult: this.lyricsList
    };

    display = {
        lyricsList: function(callback) {
            this.setState({ displayLyricsList: !this.state.displayLyricsList });
        }.bind(this)
    };

    searchClick(value) {
        const lyricsList = this.lyricsList.slice();
        const searchResult = filterLyricsList(value, lyricsList);
        this.setState({ searchResult: searchResult });
    }
    searchClick = this.searchClick.bind(this);

    lyricsData(lyricsData) {
        console.log(lyricsData);
    }

    render() {
        return (
            <div>
                <Header
                    displayLyricsList={this.display.lyricsList}
                    displayHeaderButtons={this.state.displayHeaderButtons}
                    searchClick={this.searchClick}
                />
                <Main
                    displayLyricsList={
                        this.state.displayLyricsList ? "anim-show" : "anim-hide"
                    }
                    searchResult={this.state.searchResult}
                    lyricsData={this.lyricsData}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
