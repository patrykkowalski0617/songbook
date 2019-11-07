import React from "react";
import styled, { css } from "styled-components";
import { space, circleInput, row, col, pulse, colorScheme } from "../style";
import {
    keepSearchedValue,
    lyricsListToggle,
    settingsToggle,
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
        settingsToggle,
        tutorialNextStep,
        redux: {
            counterIsRun,
            displayLyricsList,
            displaySettings,
            lyricsData,
            colorSchemeNo,
            tutorialIsInactive,
            tutorialStep,
            lyricsIsLastBarMarked
        }
    } = props;

    const buttonsData = [
        {
            onIcon: "play",
            offIcon: "pause",
            onStatus: !counterIsRun,
            display: !displayLyricsList && !displaySettings && lyricsData,
            onClickHandler: () => {
                if (!lyricsIsLastBarMarked) {
                    counterToggle(true);
                } else {
                    alert(
                        "To koniec tekstu piosenki. Przewiń go, aby zacząć w innym miejscu."
                    );
                }
                tutorialNextStep();
                localStorage.setItem("tutorialIsInactive", true);
            },
            tutorialMode: !tutorialIsInactive && tutorialStep === 1,
            tipText: `Rozpocznij zabawę.
            Metronom pomoże Ci utrzymać właściwe tempo podczas wykonywania utworu. 
            Po oliczaniu tekst zacznie przewijać się synchronicznie.`
        },
        {
            onIcon: "settings",
            offIcon: "close",
            onStatus: !displaySettings,
            display: !displayLyricsList,
            onClickHandler: () => {
                settingsToggle();
                if (counterIsRun) {
                    counterToggle(false);
                }
            }
        },
        {
            onIcon: "lyrics-list",
            offIcon: "close",
            onStatus: !displayLyricsList,
            display: !displaySettings,
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
                        position={`left: -205px; bottom: -100px;`}
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
    settingsToggle,
    counterToggle,
    tutorialNextStep
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderButtons);
