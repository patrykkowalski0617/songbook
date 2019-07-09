import React from "react";

function MetronomElement(props) {
    return (
        <div
            className={`metronom-element col-${props.colSize} ${props.marker}`}
        />
    );
}

export default MetronomElement;
