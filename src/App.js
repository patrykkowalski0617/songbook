import React, { Component } from "react";
import "./css/App.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = { displayLyricsList: false };
      this.handleClick = this.handleClick.bind(this);
   }
   handleClick(callback) {
      console.log("test in App");
      this.setState({ displayLyricsList: !this.state.displayLyricsList });
   }
   render() {
      return (
         <div>
            <Header onClick={() => this.handleClick} />
            <Main display={this.state.displayLyricsList ? "block" : "none"} />
            <Footer />
         </div>
      );
   }
}

export default App;
