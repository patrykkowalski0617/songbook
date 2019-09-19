import React from "react";
import styled from "styled-components";
import styleVariables from "../../style_abstract/styleVariables";
import { connect } from "react-redux";

const { color } = styleVariables;

const MetronomElement = styled.div`
    height: 20px;
    border: 0px solid ${color.mintdark};
    border-right-width: 1px;
    &:first-child {
        border-left-width: 1px;
    }
    &.active {
        background-color: ${color.mintsemi};
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
                    className={`col-${colSize} ${marker}`}
                />
            );
        });
    };

    return (
        <div className="container">
            <Description>metronom</Description>
            <div className="row vertical-padding">{createMetronom()}</div>
        </div>
    );
};

const mapStateToProps = state => {
    return { redux: state };
};
export default connect(mapStateToProps)(Metronom);
