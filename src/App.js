import React, { Component } from "react";
import "./css/App.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer";

class App extends Component {
  handleClick = this.handleClick.bind(this);

  state = { displayLyricsList: false };
  handleClick(callback) {
    console.log("test in App");
    this.setState({ displayLyricsList: !this.state.displayLyricsList });
  }
  searchClick(value) {
    console.log(value);
  }
  render() {
    return (
      <div>
        <Header onClick={this.handleClick} searchClick={this.searchClick} />
        <Main display={this.state.displayLyricsList ? "block" : "none"} />
        <Footer />
      </div>
    );
  }
}

export default App;
