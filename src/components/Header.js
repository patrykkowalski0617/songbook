import React, { Component } from "react";

import ButtonContainer from "./buttons/Button_Container";

class Header extends Component {
   render() {
      return (
         <header className="header">
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
}

export default Header;
