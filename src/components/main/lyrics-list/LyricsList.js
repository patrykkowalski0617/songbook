import React, { Component } from "react";
import LyricsItem from "./LyricsItem";
// import axios from "axios";

class LyricsList extends Component {
    // state = { lyricsData: null };
    // handleClick = function(buttonText) {
    //     this.getLyricsJson(buttonText);
    // };
    // handleClick = this.handleClick.bind(this);

    // getLyricsJson = function(lyricsName) {
    //     const tt = this;
    //     const fileFormat = "json";
    //     const fileName = lyricsName.toLowerCase().replace(/ /g, "_");
    //     const filePath = `lyrics/${fileName}.${fileFormat}`;
    //     axios.get(filePath).then(res => {
    //         const lyricsData = res.data;
    //         tt.setState({ lyricsData: lyricsData });
    //     });
    // };

    lyricsItems = function() {
        if (this.props.searchResult.length) {
            return this.props.searchResult.map(lyricsNames => (
                <LyricsItem
                    key={lyricsNames.id}
                    lyricsName={lyricsNames.lyricsName}
                    getLyricsName={this.props.getLyricsName}
                />
            ));
        }
        return "Jeszcze nie znam tej pioseki :(";
    };
    lyricsItems = this.lyricsItems.bind(this);

    render() {
        // this.props.lyricsData(this.state.lyricsData);
        return (
            <ul className={`lyrics-list ${this.props.displayLyricsList}`}>
                {this.lyricsItems()}
            </ul>
        );
    }
}

export default LyricsList;
