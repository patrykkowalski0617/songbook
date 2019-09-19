import React, { Component } from "react";
import styled from "styled-components";
import styleVariables from "../style_abstract/styleVariables";
import { connect } from "react-redux";
import { keepSearchedValue, lyricsListToggle } from "./../../redux/actions";

const { space, color } = styleVariables;

const SearchContainer = styled.div`
    margin-right: ${space.s1};
    width: 100%;
    position: relative;
    border-radius: 20px;
`;

const Input = styled.input`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 1px solid ${color.dark};
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

    componentDidMount() {
        const { keepSearchedValue } = this.props;

        this.onChangeHandler = e => {
            const value = e.target.value;

            this.setState({ inputValue: value });

            if (value === "") {
                this.setState({ inputValue: "" });
                this.onClickHandler("");
            }
        };

        this.onClickHandler = inputValue => {
            keepSearchedValue(inputValue);
        };
    }

    render() {
        const { displayLyricsList } = this.props.redux;

        return displayLyricsList ? (
            <SearchContainer>
                <Input
                    className="bar-input"
                    type="search"
                    placeholder="wyszukaj:
                    artysta - tytuł"
                    onChange={this.onChangeHandler}
                    onKeyUp={e => {
                        if (e.which === 13) {
                            this.onClickHandler(this.state.inputValue);
                        }
                    }}
                />
                <Button
                    className="circle-input"
                    onClick={() => this.onClickHandler(this.state.inputValue)}
                >
                    Search
                </Button>
            </SearchContainer>
        ) : null;
    }
}

const mapStateToProps = state => {
    return { redux: state };
};
const mapDispatchToProps = {
    keepSearchedValue: keepSearchedValue,
    lyricsListToggle: lyricsListToggle
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
