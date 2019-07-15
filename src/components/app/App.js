import React, { Component } from "react";

import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../Footer";
import lyrics_list from "../../data/lyrics_list";
import filterLyricsList from "./logic/filterLyricsList";
import getLyricsItems from "./logic/getLyricsItems";
import axios from "axios";
import Counter from "../../logic/Counter";

class App extends Component {
    lyricsList = getLyricsItems(lyrics_list);
    state = {
        displayLyricsList: false,
        displayHeaderButtons: [true, false],
        searchResult: this.lyricsList,
        lyricsData: null
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

    getLyricsJson = function(lyricsName) {
        const tt = this;
        const fileFormat = "json";
        const fileName = lyricsName.toLowerCase().replace(/ /g, "_");
        const filePath = `lyrics/${fileName}.${fileFormat}`;

        axios.get(filePath).then(res => {
            const lyricsData = res.data;
            tt.counter = new Counter(res.data);
            tt.setState({ lyricsData: lyricsData });
        });
    };

    getLyricsName(lyricsName) {
        this.getLyricsJson(lyricsName);
    }
    getLyricsName = this.getLyricsName.bind(this);

    render() {
        return (
            <div>
                <Header
                    displayLyricsList={this.display.lyricsList}
                    displayHeaderButtons={this.state.displayHeaderButtons}
                    searchClick={this.searchClick}
                    counter={this.counter}
                />
                <Main
                    displayLyricsList={
                        this.state.displayLyricsList ? "anim-show" : "anim-hide"
                    }
                    searchResult={this.state.searchResult}
                    getLyricsName={this.getLyricsName}
                    lyricsData={this.state.lyricsData}
                    counter={this.counter}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
