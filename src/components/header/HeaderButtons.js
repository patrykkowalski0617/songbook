import React from "react";
import styled from "styled-components";
import { space, circleInput, row, col } from "../style";
import {
    keepSearchedValue,
    lyricsListToggle,
    counterToggle
} from "./../../redux/actions";
import { connect } from "react-redux";

const HeaderButtonsElement = styled.div`
    ${row}
    margin-right: -${space.s1};
    margin-left: 0;
`;

const ButtonContainer = styled.div`
    ${col[0]}
    padding: 0 0.4rem;
`;

const ButtonElement = styled.button`
    ${circleInput}
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

    return (
        <HeaderButtonsElement>
            {buttonsData.map((item, index) => {
                const icon = item.onStatus ? item.onIcon : item.offIcon;

                return item.display ? (
                    <ButtonContainer key={index}>
                        <ButtonElement
                            className={`icon-${icon}`}
                            onClick={() => {
                                item.onClickHandler();
                            }}
                        />
                    </ButtonContainer>
                ) : null;
            })}
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
