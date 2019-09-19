import React from "react";
import styled from "styled-components";
import styleVariables from "../style_abstract/styleVariables";
import {
    keepSearchedValue,
    lyricsListToggle,
    counterToggle
} from "./../../redux/actions";
import { connect } from "react-redux";

const { space } = styleVariables;

const HeaderButtonsElement = styled.div`
    margin-right: -${space.s1};
    margin-left: 0;
`;

const ButtonContainer = styled.div`
    padding: 0 0.4rem;
`;

const ButtonElement = styled.button`
    font-size: 20px;
    cursor: pointer;
`;

const HeaderButtons = props => {
    const { counterIsRun, displayLyricsList, lyricsData } = props.redux;
    const { counterToggle, keepSearchedValue, lyricsListToggle } = props;

    const buttonsData = [
        {
            onIcon: "play",
            offIcon: "pause",
            onStatus: !counterIsRun,
            display: !displayLyricsList && lyricsData,
            onClickHandler: () => {
                counterToggle(true);
            }
        },
        {
            onIcon: "lyrics-list",
            offIcon: "close",
            onStatus: !displayLyricsList,
            display: true,
            onClickHandler: () => {
                keepSearchedValue("");
                lyricsListToggle();
                if (counterIsRun) {
                    counterToggle(false);
                }
            }
        }
    ];

    const buttonElements = buttonsData.map((item, index) => {
        const icon = item.onStatus ? item.onIcon : item.offIcon;

        return item.display ? (
            <ButtonContainer className="col" key={index}>
                <ButtonElement
                    className={`icon-${icon} circle-input`}
                    onClick={() => {
                        item.onClickHandler();
                    }}
                />
            </ButtonContainer>
        ) : null;
    });

    return (
        <HeaderButtonsElement className="row">
            {buttonElements}
        </HeaderButtonsElement>
    );
};

const mapStateToProps = state => {
    return { redux: state };
};
const mapDispatchToProps = {
    keepSearchedValue,
    lyricsListToggle,
    counterToggle
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderButtons);
