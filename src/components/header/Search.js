import React, { Component } from "react";
import styled from "styled-components";
import { space, colorScheme, barInput, circleInput } from "../../style";
import { connect } from "react-redux";
import { keepSearchedValue, lyricsListToggle } from "./../../redux/actions";
import { formValueSelector } from "redux-form";

const selector = formValueSelector("settings");

const SearchContainer = styled.div`
    margin-right: ${space.s1};
    width: 100%;
    position: relative;
    border-radius: 20px;
`;

const Input = styled.input`
    ${props => {
        const no = props.colorSchemeNo;
        return barInput(no);
    }}
    margin: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 1px solid
        ${props => colorScheme[props.colorSchemeNo].secondary1};
    width: calc(100% - 70px);
    position: absolute;
    &:focus {
        border-right: none;
    }
    font-size: ${space.s3};
`;

const Button = styled.button`
    ${props => {
        const no = props.colorSchemeNo;
        return circleInput(no);
    }}
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 100%;
    max-width: 70px;
    cursor: pointer;
    position: absolute;
    right: 0;
    font-size: ${space.s3};
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
        const {
            colorSchemeNo,
            redux: { displayLyricsList }
        } = this.props;

        return displayLyricsList ? (
            <SearchContainer>
                <Input
                    type="search"
                    placeholder="wyszukaj:
                    artysta - tytuł"
                    onChange={this.onChangeHandler}
                    onKeyUp={e => {
                        if (e.which === 13) {
                            this.onClickHandler(this.state.inputValue);
                        }
                    }}
                    colorSchemeNo={colorSchemeNo}
                />
                <Button
                    onClick={() => this.onClickHandler(this.state.inputValue)}
                    colorSchemeNo={colorSchemeNo}
                >
                    Search
                </Button>
            </SearchContainer>
        ) : null;
    }
}

const mapStateToProps = state => ({
    redux: state,
    colorSchemeNo: selector(state, "color_scheme_no") || 0
});

const mapDispatchToProps = {
    keepSearchedValue: keepSearchedValue,
    lyricsListToggle: lyricsListToggle
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
