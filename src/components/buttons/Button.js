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
         cursor: "pointer"
      }
   };

   render() {
      return (
         <div className="col" style={this.style.col}>
            <i
               className={`icon icon-${this.props.icon} icon-role-${
                  this.props.iconRole
               } circle-input`}
               style={this.style.icon}
               onClick={this.props.onClick}
            />
         </div>
      );
   }
}

export default Button;
