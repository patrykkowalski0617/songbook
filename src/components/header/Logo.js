import React from "react";

const Logo = props => {
   const style = {
      display: props.display
   };
   return (
      <h1 className="logo" style={style}>
         <a href="/">
            Song
            <br />
            Book
         </a>
      </h1>
   );
};

export default Logo;
