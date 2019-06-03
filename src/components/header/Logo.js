import React from "react";

const Logo = props => {
   return (
      <h1 className={`logo ${props.display}`}>
         <a href="/">
            Song
            <br />
            Book
         </a>
      </h1>
   );
};

export default Logo;
