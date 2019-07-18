import React from "react";

const Logo = props => {
    return !props.display ? (
        <h1 className={`logo`}>
            <a href="/">
                Song
                <br />
                Book
            </a>
        </h1>
    ) : (
        ""
    );
};

export default Logo;
