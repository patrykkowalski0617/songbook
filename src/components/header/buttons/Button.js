import React from "react";

const Button = props => {
   const style = {
      col: {
         padding: "0 .4rem"
      },
      icon: {
         fontSize: "20px",
         lineHeight: "40px",
         textAlign: "center",
         cursor: "pointer"
      }
   };

   return (
      <div className="col" style={style.col}>
         {props.test}
         <button
            className={`icon icon-${props.icon} button-${
               props.buttonName
            } circle-input`}
            style={style.icon}
            onClick={props.onClick}
         />
      </div>
   );
};

export default Button;
