import React, { Component } from "react";
import "./css/App.css";

import Header from "./components/header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
   render() {
      return (
         <div>
            <Header onClick={() => console.log("test in App")} />
            <Main />
            <Footer />
         </div>
      );
   }
}

export default App;
