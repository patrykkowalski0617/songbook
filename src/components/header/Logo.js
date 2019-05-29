import React from "react";

function Logo(props) {
   const style = {
      display: props.display
   };
   return (
      <h1 className="logo" style={style}>
         Song
         <br />
         Book
      </h1>
   );
}

export default Logo;
