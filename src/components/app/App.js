import React, { Component } from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import { connect } from "react-redux";
import { counterSetScrollDelay } from "../../redux/actions";

class App extends Component {
    state = {
        displayCountdown: false
    };

    componentDidMount() {
        this.props.counterSetScrollDelay();
    }

    render() {
        return (
            <div>
                <Header />
                <Main displayCountdown={this.state.displayCountdown} />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { redux: state };
};
const mapDispatchToProps = {
    counterSetScrollDelay
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
