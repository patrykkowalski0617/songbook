import React, { Component } from "react";
import Button from "./Button";

class ButtonContainer extends Component {
   state = {
      lyricsListIcon: 0,
      other: "status"
   };

   style = {
      headerButtons: {
         margin: "0 -.4rem"
      }
   };

   buttonsData = {
      lyricsList: {
         icons: ["lyrics-list", "close"],
         buttonName: "lyrics-list"
      }
   };

   handleClick = function(callback) {
      console.log("test in Buttons");
      let iconIndex = this.state.lyricsListIcon;
      if (iconIndex !== this.buttonsData.lyricsList.icons.length - 1) {
         iconIndex++;
      } else {
         iconIndex = 0;
      }
      this.setState({ lyricsListIcon: iconIndex });
      if (callback) {
         callback();
      }
   };

   render() {
      return (
         <div className="row header-buttons" style={this.style.headerButtons}>
            <Button
               icon={
                  this.buttonsData.lyricsList.icons[this.state.lyricsListIcon]
               }
               buttonName={this.buttonsData.lyricsList.buttonName}
               test={this.props.test}
               onClick={() => this.handleClick(this.props.onClick())}
            />
         </div>
      );
   }
}

export default ButtonContainer;
