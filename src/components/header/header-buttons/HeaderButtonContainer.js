import React, { Component } from "react";
import HeaderButton from "./HeaderButton";

class ButtonContainer extends Component {
    render() {
        console.log(this.props.icons);
        const icons = this.props.icons;
        const buttons = icons.map((item, index) => {
            if (item) {
                return (
                    <HeaderButton
                        key={index}
                        icon={icons[index]}
                        onClick={() => this.props.handleClick(index)}
                    />
                );
            }
        });

        return <div className="row header-buttons">{buttons}</div>;
    }
}

export default ButtonContainer;
