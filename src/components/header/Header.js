import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Buttons from "./buttons/Buttons";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <Search />
        <Buttons />
      </div>
    </header>
  );
}

export default Header;
