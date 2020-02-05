import React from "react";
import styled from "styled-components";
import {
    colorScheme,
    container,
    verticalPadding,
    row,
    col
} from "../../../style";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";

const selector = formValueSelector("settings");

const Container = styled.div`
    ${container}
`;

const MetronomElements = styled.div`
    ${verticalPadding}
    ${row}
`;

const MetronomElement = styled.div`
    ${props => {
        const colSize = props.colSize;
        return col[colSize];
    }}
    height: 8px;
    border: 0px solid ${props => colorScheme[props.colorSchemeNo].muted};
    border-right-width: 1px;
    &:first-child {
        border-left-width: 1px;
    }
    &.active {
        background-color: ${props =>
            colorScheme[props.colorSchemeNo].contrast1};
    }
`;

const Description = styled.div`
    margin: 0.7rem 0 -0.3rem 0;
    font-size: 0.7rem;
    text-align: right;
    color: ${props => colorScheme[props.colorSchemeNo].light1};
`;

const Metronom = ({
    redux: { songTiming, counterIsRun, counterIterationNumber },
    colorSchemeNo
}) => {
    const colSize = 12 / songTiming;

    const metronomParts = Array(songTiming).fill(null);

    const createMetronom = () => {
        return metronomParts.map((item, index) => {
            let marker = "";
            if (counterIsRun && index === counterIterationNumber % songTiming) {
                marker = "active";
            }

            return (
                <MetronomElement
                    key={index}
                    className={`${marker}`}
                    colSize={colSize}
                    colorSchemeNo={colorSchemeNo}
                />
            );
        });
    };

    return (
        <Container>
            <Description colorSchemeNo={colorSchemeNo}>metronom</Description>
            <MetronomElements>{createMetronom()}</MetronomElements>
        </Container>
    );
};

const mapStateToProps = state => ({
    redux: state,
    colorSchemeNo: selector(state, "color_scheme_no") || 0
});

export default connect(mapStateToProps)(Metronom);
