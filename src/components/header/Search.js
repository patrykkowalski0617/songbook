import React from "react";

function Search(props) {
  const style = {
    display: props.display
  };
  return <input type="search" className="search bar-input" style={style} />;
}

export default Search;
