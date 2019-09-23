import React from "react";
import styled from "styled-components";
import { colorScheme, grid } from "../../style";
import { connect } from "react-redux";

const Container = styled.div`
    ${grid.container}
`;

const MetronomElements = styled.div`
    ${grid.container}
    ${grid.row}
`;

const MetronomElement = styled.div`
    ${props => {
        const colSize = props.colSize;
        return grid.col[colSize];
    }}
    height: 20px;
    border: 0px solid ${colorScheme[0].light1};
    border-right-width: 1px;
    &:first-child {
        border-left-width: 1px;
    }
    &.active {
        background-color: ${colorScheme[0].contrast1};
    }
`;

const Description = styled.div`
    margin: 0.7rem 0 -0.3rem 0;
    font-size: 0.7rem;
`;

const Metronom = props => {
    const { songTiming, counterIsRun, counterIterationNumber } = props.redux;

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
                />
            );
        });
    };

    return (
        <Container>
            <Description>metronom</Description>
            <MetronomElements>{createMetronom()}</MetronomElements>
        </Container>
    );
};

const mapStateToProps = state => {
    return { redux: state };
};
export default connect(mapStateToProps)(Metronom);
