import React, { Component } from "react";

class Search extends Component {
    state = {
        inputValue: ""
    };

    render() {
        return this.props.display ? (
            <div className={`search`}>
                <input
                    className="bar-input"
                    type="search"
                    placeholder="wyszukaj: artysta - tytuł"
                    onChange={e => {
                        const value = e.target.value;
                        this.setState({ inputValue: value });
                        if (value === "") {
                            this.props.searchClick("");
                        }
                    }}
                    onKeyUp={e => {
                        if (e.which === 13) {
                            this.props.searchClick(this.state.inputValue);
                        }
                    }}
                />
                <button
                    className="circle-input"
                    onClick={() =>
                        this.props.searchClick(this.state.inputValue)
                    }
                >
                    Search
                </button>
            </div>
        ) : (
            ""
        );
    }
}

export default Search;
