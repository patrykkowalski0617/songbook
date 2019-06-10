import React, { Component } from "react";
import HeaderButton from "./HeaderButton";

class ButtonContainer extends Component {
  render() {
    const icons = this.props.icons;
    const buttons = icons.map((item, index) => (
      <HeaderButton
        key={index}
        icon={icons[index]}
        onClick={() => this.props.handleClick(index)}
      />
    ));

    return <div className="row header-buttons">{buttons}</div>;
  }
}

export default ButtonContainer;
