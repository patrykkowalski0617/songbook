import React from "react";
import styled from "styled-components";
import v from "../style_abstract/variables";
import {
    keepSearchedValue,
    lyricsListToggle,
    counterToggle
} from "./../../redux/actions";
import { connect } from "react-redux";

const HeaderButtonsElement = styled.div`
    margin-right: -${v.space.s1};
    margin-left: 0;
`;

const ButtonContainer = styled.div`
    padding: 0 0.4rem;
`;

const ButtonElement = styled.button`
    font-size: 20px;
    cursor: pointer;
`;

const HeaderButtons = function(props) {
    const buttonsDataLocal = [
        {
            onIcon: "play",
            offIcon: "pause",
            onStatus: !props.redux.counterIsRun,
            display: !props.redux.displayLyricsList && props.redux.lyricsData,
            onClickHandler: () => {
                props.counterToggle(true);
            }
        },
        {
            onIcon: "lyrics-list",
            offIcon: "close",
            onStatus: !props.redux.displayLyricsList,
            display: true,
            onClickHandler: () => {
                props.keepSearchedValue("");
                props.lyricsListToggle();
                if (props.redux.counterIsRun) {
                    props.counterToggle(false);
                }
            }
        }
    ];
    const buttonElements = buttonsDataLocal.map((item, index) => {
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
