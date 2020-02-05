import React from "react";
import styled, { css } from "styled-components";
import { space, circleInput, row, col, pulse, colorScheme } from "../../style";
import {
    keepSearchedValue,
    lyricsListToggle,
    settingsToggle,
    counterToggle,
    tutorialNextStep
} from "./../../redux/actions";
import { connect } from "react-redux";
import { TutorialPopUp } from "../global";
import { formValueSelector } from "redux-form";

const selector = formValueSelector("settings");

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
            : "none"};
    ${props =>
        props.userImgSrc
            ? ` 
            background-image: url(${props.userImgSrc});
            background-size: contain;
            background-position: center;
            ::before{
                display: none;
            }`
            : null}
`;

const HeaderButtons = ({
    counterToggle,
    keepSearchedValue,
    lyricsListToggle,
    settingsToggle,
    tutorialNextStep,
    colorSchemeNo,
    redux: {
        counterIsRun,
        displayLyricsList,
        displaySettings,
        lyricsData,
        tutorialIsInactive,
        tutorialStep,
        lyricsIsLastBarMarked,
        loggedIn
    }
}) => {
    const userImgSrc = loggedIn ? loggedIn.images[0].url : null;

    const buttonsData = [
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
            onIcon: "play",
            offIcon: "pause",
            onStatus: !counterIsRun,
            display: !displayLyricsList && !displaySettings && lyricsData,
            onClickHandler: () => {
                if (!lyricsIsLastBarMarked) {
                    counterToggle(true);
                } else {
                    alert(
                        "This is the end of the lyrics. In order to start, scroll to somewhere else."
                    );
                }
                tutorialNextStep();
                localStorage.setItem("tutorialIsInactive", true);
            },
            tutorialMode: !tutorialIsInactive && tutorialStep === 1,
            tipText: `Start having fun! The metronome will help you keep the right tempo during your performance. Lyrics will start scroll synchronously after countdown.`
        },
        {
            onIcon: "list",
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
            tipText: "Select a song from the list."
        },
        {
            onIcon: "login",
            offIcon: "logout",
            onStatus: true,
            display: !displayLyricsList && !displaySettings,
            onClickHandler: () => {
                if (loggedIn) {
                    const logOut = window.confirm("Do you want to log-out?");
                    if (logOut) {
                        window.location.href = window.location.origin;
                    }
                } else {
                    window.location.href = "https://getting-s.herokuapp.com";
                }
            }
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
                            userImgSrc={icon === "login" ? userImgSrc : null}
                        />
                        {tutorialPopUp}
                    </ButtonContainer>
                ) : null;
            })}
        </HeaderButtonsElement>
    );
};

const mapStateToProps = state => ({
    redux: state,
    colorSchemeNo: selector(state, "color_scheme_no") || 0
});

const mapDispatchToProps = {
    keepSearchedValue,
    lyricsListToggle,
    settingsToggle,
    counterToggle,
    tutorialNextStep
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderButtons);
