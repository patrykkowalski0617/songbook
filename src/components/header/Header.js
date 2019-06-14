import React, { Component } from "react";
import "./header.css";
import Logo from "./Logo";
import Search from "./Search";
import HeaderButtonContainer from "./header-buttons/HeaderButtonContainer";

import counter from "../../logic/counter";

class Header extends Component {
   state = {
      displaySearch: false,
      // indexes needed to set correct icon from buttonData.icons
      iconInitialIndex: [0, 0, 0]
   };

   buttonData = {
      // possible icons for each button
      icons: [["lyrics-list", "close"], ["play", "pause"], ["stop"]],
      // methods for each button
      methods: [
         () => {
            this.setState({ displaySearch: !this.state.displaySearch });
            this.props.displayLyricsList();
         },
         () => {
            counter.action.toggle();
         },
         () => {
            if (counter.isRun) {
               this.switchIcon(1);
            }
            counter.action.stop();
         }
      ]
   };

   switchIcon(buttonIndex) {
      let currentSate = this.state.iconInitialIndex.slice();
      let iconIndex = currentSate[buttonIndex];

      if (iconIndex < this.buttonData.icons[buttonIndex].length - 1) {
         iconIndex++;
      } else {
         iconIndex = 0;
      }
      currentSate[buttonIndex] = iconIndex;

      this.setState({ iconInitialIndex: currentSate });
   }

   handleClick(buttonIndex) {
      this.switchIcon(buttonIndex);
      this.buttonData.methods[buttonIndex]();
   }
   handleClick = this.handleClick.bind(this);

   render() {
      const indexes = this.state.iconInitialIndex.slice();
      const icons = this.buttonData.icons.slice();
      const getIcons = function() {
         return icons.map(function(item, index) {
            return item[indexes[index]];
         });
      };

      return (
         <header className="header">
            <div className="container">
               <Logo
                  display={this.state.displaySearch ? "anim-hide" : "anim-show"}
               />
               <Search
                  display={this.state.displaySearch ? "anim-show" : "anim-hide"}
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
