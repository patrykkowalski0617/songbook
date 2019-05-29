import React from "react";

function Logo(props) {
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
}

export default Logo;
