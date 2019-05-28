import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Buttons from "./buttons/Buttons";

function Header(props) {
   return (
      <header className="header">
         <div className="container">
            <Logo />
            <Search />
            <Buttons onClick={() => props.onClick()} />
         </div>
      </header>
   );
}

export default Header;
