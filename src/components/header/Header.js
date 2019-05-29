import React, { Component } from "react";
import Logo from "./Logo";
import Search from "./Search";
import Buttons from "./buttons/Buttons";

class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {
         displaySerach: false
      };
   }
   handleClick(callback) {
      console.log("test in Header");
      this.setState({ displaySerach: !this.state.displaySerach });
      if (callback) {
         callback();
      }
   }
   render() {
      return (
         <header className="header">
            <div className="container">
               <Logo display={this.state.displaySerach ? "none" : "block"} />
               <Search display={this.state.displaySerach ? "block" : "none"} />
               <Buttons
                  onClick={() => this.handleClick(this.props.onClick())}
               />
            </div>
         </header>
      );
   }
}

export default Header;
