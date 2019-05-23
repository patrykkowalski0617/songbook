import React, { Component } from "react";

class Button extends Component {
   style = {
      col: {
         padding: "0 .3rem"
      },
      icon: {
         fontSize: "20px",
         lineHeight: "40px",
         textAlign: "center",
         cursor: "pointer",
         border: "none"
      }
   };

   render() {
      return (
         <div className="col" style={this.style.col}>
            <button
               className={`icon icon-${this.props.icon} button-${
                  this.props.buttonName
               } circle-input`}
               style={this.style.icon}
               onClick={this.props.onClick}
            />
         </div>
      );
   }
}

export default Button;
