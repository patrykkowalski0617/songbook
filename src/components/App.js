import React, { Component } from "react";
import { Header } from "./header/";
import { Main } from "./main/";
import { Footer } from "./footer/";
import { connect } from "react-redux";
import {
    counterSetScrollDelay,
    tutorialDeactivate,
    logIn
} from "../redux/actions";
import Spotify from "spotify-web-api-js";

const spotifyApi = new Spotify();

class App extends Component {
    constructor(props) {
        super(props);

        const params = this.getHashParams();
        
        const token = params.access_token;
        if (token) {
            spotifyApi.setAccessToken(token);
            spotifyApi
                .getMe()
                .then(data => {
                    this.props.logIn(token ? data : false);
                })
                .catch(err => console.log(err));
        }

        this.state = { userImg: null };
    }

    getHashParams() {
        const hashParams = {};
        let e,
            r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ((e = r.exec(q))) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }

        return hashParams;
    }

    componentWillMount() {
        const { counterSetScrollDelay, tutorialDeactivate } = this.props;

        counterSetScrollDelay();

        const tutorialIsInactive = localStorage.getItem("tutorialIsInactive");
        if (tutorialIsInactive) {
            tutorialDeactivate();
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { redux: state };
};
const mapDispatchToProps = {
    counterSetScrollDelay,
    tutorialDeactivate,
    logIn
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
