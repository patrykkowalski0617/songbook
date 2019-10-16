import React from "react";
import styled from "styled-components";
import { colorScheme, container, space, barInput } from "../style";
import { tutorialNextStep, tutorialDeactivate } from "./../../redux/actions";
import { connect } from "react-redux";

const TutorialPopUpElement = styled.div`
    ${container}
    width: 200px;
    max-height: 300px;
    border-radius: 5px;
    position: absolute;
    transform: translate(0, 100%);
    ${props =>
        `background-color: ${colorScheme[props.colorSchemeNo].contrast1}88;
        ${props.position};`}

    &::before {
        content: "";
        position: absolute;
        display: block;
        border-radius: 100%;
        background: inherit;
        height: 20px;
        width: 20px;
        ${props =>
            props.bubblesPosition === "top right" ||
            props.bubblesPosition === "top left"
                ? "top"
                : "bottom"}: -20px;
        ${props =>
            props.bubblesPosition === "top left" ||
            props.bubblesPosition === "bottom left"
                ? "left"
                : "right"}: -20px;
        transform: ${props =>
            props.bubblesPosition === "bottom left" ||
            props.bubblesPosition === "bottom right"
                ? "rotate(180deg)"
                : ""};
        ${props => ` box-shadow:
        ${
            props.bubblesPosition === "top left" ||
            props.bubblesPosition === "bottom right"
                ? "-"
                : ""
        }16px -21px 0px -3px ${colorScheme[props.colorSchemeNo].contrast1}88,
        ${
            props.bubblesPosition === "top left" ||
            props.bubblesPosition === "bottom right"
                ? "-"
                : ""
        }22px -40px 0px -6px ${colorScheme[props.colorSchemeNo].contrast1}88`};
    }
`;

const Header = styled.h2`
    font-size: ${space.s3};
    margin-bottom: ${space.s3};
`;

const Button = styled.button`
    ${props => {
        return barInput(props.colorSchemeNo, "md");
    }}
    margin-left: auto;
    margin-right: 0;
    display: block;
`;

const TutorialPopUp = props => {
    const {
        position,
        bubblesPosition,
        tipText,
        tutorialDeactivate,
        redux: { tutorialStep, colorSchemeNo }
    } = props;

    return (
        <TutorialPopUpElement
            colorSchemeNo={colorSchemeNo}
            position={position}
            bubblesPosition={bubblesPosition}
        >
            <Header>Krok {tutorialStep + 1}.</Header>
            <p>{tipText}</p>
            <Button
                type="button"
                colorSchemeNo={colorSchemeNo}
                onClick={() => {
                    localStorage.setItem("tutorialIsInactive", true);
                    tutorialDeactivate();
                }}
            >
                Pomiń tutorial
            </Button>
        </TutorialPopUpElement>
    );
};

const mapStateToProps = state => {
    return { redux: state };
};
const mapDispatchToProps = {
    tutorialNextStep,
    tutorialDeactivate
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TutorialPopUp);
