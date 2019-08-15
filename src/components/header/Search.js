import React, { Component } from "react";
import styled from "styled-components";
import v from "../style_abstract/variables";

const SearchContainer = styled.div`
    margin-right: ${v.space.s1};
    width: 100%;
    position: relative;
    border-radius: 20px;
`;

const Input = styled.input`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 1px solid ${v.color.dark};
    width: calc(100% - 60px);
    position: absolute;
    &:focus {
        border-right: none;
    }
`;

const Button = styled.button`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 100%;
    max-width: 60px;
    cursor: pointer;
    position: absolute;
    right: 0;
`;

class Search extends Component {
    state = {
        inputValue: ""
    };

    render() {
        return this.props.display ? (
            <SearchContainer>
                <Input
                    className="bar-input"
                    type="search"
                    placeholder="wyszukaj:
                    artysta - tytuł"
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
                    autoFocus
                />
                <Button
                    className="circle-input"
                    onClick={() =>
                        this.props.searchClick(this.state.inputValue)
                    }
                >
                    Search
                </Button>
            </SearchContainer>
        ) : (
            ""
        );
    }
}

export default Search;
