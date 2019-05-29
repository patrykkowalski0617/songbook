import React from "react";

function Search(props) {
  const style = {
    display: props.display
  };
  return (
    <input
      type="search"
      className="search bar-input"
      style={style}
      placeholder="wyszukaj: artysta - tytuł"
    />
  );
}

export default Search;
