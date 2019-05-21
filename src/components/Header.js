import React from "react";

import ButtonContainer from "./buttons/Button_Container";

function Header() {
   return (
      <header id="header">
         <div className="container">
            <h1>
               Song
               <br />
               Book
            </h1>
            <ButtonContainer />
         </div>
      </header>
   );
}

export default Header;
