import React, { Component } from "react";
import HeaderButton from "./HeaderButton";

class ButtonContainer extends Component {
   state = {
      iconInitialIndex: [0, 0]
   };

   buttonsIcons = [["lyrics-list", "close"], ["play", "pause"]];

   buttonsNames = ["lyrics-list", "play"];

   handleClick = function(buttonIndex, callback) {
      console.log("test in Buttons");
      let iconIndex = this.state.iconInitialIndex[buttonIndex];
      let currentSate = this.state.iconInitialIndex.slice();
      if (iconIndex !== this.buttonsIcons[buttonIndex].length - 1) {
         iconIndex++;
      } else {
         iconIndex = 0;
      }

      currentSate[buttonIndex] = iconIndex;

      this.setState({ iconInitialIndex: currentSate });

      if (callback) {
         callback();
      }
   };

   render() {
      return (
         <div className="row header-buttons">
            <HeaderButton
               icon={this.buttonsIcons[0][this.state.iconInitialIndex[0]]}
               buttonName={this.buttonsNames[0]}
               onClick={() => this.handleClick(0, this.props.onClick())}
            />
            <HeaderButton
               icon={this.buttonsIcons[1][this.state.iconInitialIndex[1]]}
               buttonName={this.buttonsNames[1]}
               onClick={() => this.handleClick(1, this.props.onClick())}
            />
         </div>
      );
   }
}

export default ButtonContainer;
