import React, { Component } from "react";
import Logo from "./Logo";
import Search from "./Search";
import Buttons from "./buttons/Buttons";

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
          <Logo display={this.state.displaySerach ? "none" : "block"} />
          <Search
            display={this.state.displaySerach ? "block" : "none"}
            searchClick={this.props.searchClick}
          />
          <Buttons onClick={() => this.handleClick(this.props.onClick())} />
        </div>
      </header>
    );
  }
}

export default Header;
