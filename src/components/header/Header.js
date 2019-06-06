import React, { Component } from "react";
import Logo from "./Logo";
import Search from "./Search";
import HeaderButtonContainer from "./header-buttons/HeaderButtonContainer";

class Header extends Component {
   state = {
      displaySerach: false
   };

   handleClick(callback) {
      if (callback) {
         callback();
      }

      console.log("test in Header");
      this.setState({ displaySerach: !this.state.displaySerach });
   }

   render() {
      return (
         <header className="header">
            <div className="container">
               <Logo
                  display={this.state.displaySerach ? "anim-hide" : "anim-show"}
               />
               <Search
                  display={this.state.displaySerach ? "anim-show" : "anim-hide"}
                  searchClick={this.props.searchClick}
               />
               <HeaderButtonContainer
                  onClick={() => this.handleClick(this.props.onClick())}
               />
            </div>
         </header>
      );
   }
}

export default Header;
