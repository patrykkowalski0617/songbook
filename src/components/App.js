import React, { Component } from "react";
import { Header } from "./header/";
import { Main } from "./main/";
import { Footer } from "./footer/";
import { connect } from "react-redux";
import { counterSetScrollDelay, tutorialDeactivate } from "../redux/actions";

class App extends Component {
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
    tutorialDeactivate
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
