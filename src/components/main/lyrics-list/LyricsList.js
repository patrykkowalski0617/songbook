import React, { Component } from "react";
import LyricsItem from "./LyricsItem";
import axios from "axios";

class LyricsList extends Component {
    handleClick = function(buttonText) {
        console.log(buttonText);
    };
    handleClick = this.handleClick.bind(this);

    componentDidMount() {
        axios
            .get("lyrics/kings_of_leon_-_sex_on_fire.json")
            .then(res => console.log(res.data));
        // this.request = function() {
        // const xmlhttp = new XMLHttpRequest();
        // const url = "./kings_of_leon_-_sex_on_fire.json";
        // xmlhttp.onreadystatechange = function() {
        //     if (this.readyState === 4 && this.status === 200) {
        //         // const lyricsObj = JSON.parse(this.responseText);
        //         console.log(this);
        //     }
        // };
        // xmlhttp.open("GET", url, true);
        // xmlhttp.send();
        // };

        // this.request = this.request.bind(this);
    }

    lyricsItems = function() {
        if (this.props.searchResult.length) {
            return this.props.searchResult.map(lyricsNames => (
                <LyricsItem
                    key={lyricsNames.id}
                    lyricsName={lyricsNames.lyricsName}
                    handleClick={this.request}
                />
            ));
        }
        return "Jeszcze nie znam tej pioseki :(";
    };
    lyricsItems = this.lyricsItems.bind(this);

    render() {
        return (
            <ul className={`lyrics-list ${this.props.displayLyricsList}`}>
                {this.lyricsItems()}
            </ul>
        );
    }
}

export default LyricsList;
