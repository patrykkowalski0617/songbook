import React from "react";
import styled, { css } from "styled-components";
import { space, circleInput, row, col, pulse, colorScheme } from "../style";
import {
    keepSearchedValue,
    lyricsListToggle,
    counterToggle,
    tutorialNextStep
} from "./../../redux/actions";
import { connect } from "react-redux";
import { TutorialPopUp } from "../global";

const HeaderButtonsElement = styled.div`
    ${row}
    margin-right: -${space.s1};
    margin-left: 0;
`;

const ButtonContainer = styled.div`
    ${col[0]}
    padding: 0 0.4rem;
    z-index: 1;
    position: relative;
`;

const ButtonElement = styled.button`
    ${props => {
        return circleInput(props.colorSchemeNo);
    }}
    animation: ${props =>
        props.tutorialMode
            ? css`
                  ${pulse(props)} 3s ease-out infinite;
              `
            : "none"}
`;

const HeaderButtons = props => {
    const {
        counterToggle,
        keepSearchedValue,
        lyricsListToggle,
        tutorialNextStep,
        redux: {
            counterIsRun,
            displayLyricsList,
            lyricsData,
            colorSchemeNo,
            tutorialIsInactive,
            tutorialStep
        }
    } = props;

    const buttonsData = [
        {
            onIcon: "play",
            offIcon: "pause",
            onStatus: !counterIsRun,
            display: !displayLyricsList && lyricsData,
            onClickHandler: () => {
                counterToggle(true);
                tutorialNextStep();
                localStorage.setItem("tutorialIsInactive", true);
            },
            tutorialMode: !tutorialIsInactive && tutorialStep === 1,
            tipText: `Rozpocznij zabawę.
            Metronom pomoże Ci utrzymać właściwe tempo podczas wykonywania utworu. 
            Po oliczaniu tekst zacznie przewijać się synchronicznie.`
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
                tutorialNextStep();
            },
            tutorialMode: !tutorialIsInactive && tutorialStep === 0,
            tipText: "Wybierz piosenkę z listy."
        }
    ];

    return (
        <HeaderButtonsElement>
            {buttonsData.map((item, index) => {
                const icon = item.onStatus ? item.onIcon : item.offIcon;
                const tutorialPopUp = item.tutorialMode ? (
                    <TutorialPopUp
                        position={`left: -220px; bottom: -100px;`}
                        bubblesPosition={"top right"}
                        tipText={item.tipText}
                    />
                ) : null;

                return item.display ? (
                    <ButtonContainer key={index}>
                        <ButtonElement
                            className={`icon-${icon}`}
                            onClick={() => {
                                item.onClickHandler();
                            }}
                            colorSchemeNo={colorSchemeNo}
                            tutorialMode={item.tutorialMode}
                            animationColor={
                                colorScheme[colorSchemeNo].contrast1
                            }
                        />
                        {tutorialPopUp}
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
    counterToggle,
    tutorialNextStep
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderButtons);
