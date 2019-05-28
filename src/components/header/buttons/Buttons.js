import React from "react";
import ButtonSingle from "./ButtonSingle";

function Buttons() {
  const style = {
    headerButtons: {
      margin: "0 -.3rem"
    }
  };

  return (
    <div className="row header-buttons" style={style.headerButtons}>
      <ButtonSingle />
    </div>
  );
}

export default Buttons;
