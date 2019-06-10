import React from "react";

const Button = props => {
  return (
    <div className="col header-button">
      {props.test}
      <button
        className={`icon icon-${props.icon} circle-input`}
        onClick={props.onClick}
      />
    </div>
  );
};

export default Button;
