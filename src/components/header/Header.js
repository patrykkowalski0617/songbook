import React, { Component } from "react";
import "./header.css";
import Logo from "./Logo";
import Search from "./Search";
import HeaderButtonContainer from "./header-buttons/HeaderButtonContainer";

class Header extends Component {
    handleClick(buttonIndex) {
        this.props.switchIcon(buttonIndex);
        this.props.buttonData.methods[buttonIndex]();
    }
    handleClick = this.handleClick.bind(this);

    render() {
        const tt = this;
        const indexes = this.props.headerButtonsIconIndex.slice();
        const icons = this.props.buttonData.icons.slice();
        const getIcons = function() {
            return icons.map(function(item, index) {
                if (tt.props.displayHeaderButtons[index]) {
                    return item[indexes[index]];
                }
            });
        };

        return (
            <header className="header">
                <div className="container">
                    <Logo display={this.props.displayLyricsList} />
                    <Search
                        display={this.props.displayLyricsList}
                        searchClick={this.props.searchClick}
                    />
                    <HeaderButtonContainer
                        icons={getIcons()}
                        handleClick={this.handleClick}
                    />
                </div>
            </header>
        );
    }
}

export default Header;
