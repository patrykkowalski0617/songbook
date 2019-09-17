import React from "react";
import MetronomElement from "./MetronomElement";
import styled from "styled-components";
import { connect } from "react-redux";

const Description = styled.div`
    margin: 0.7rem 0 -0.3rem 0;
    font-size: 0.7rem;
`;

const Metronom = function(props) {
    const colSize = 12 / props.redux.songTiming;

    const metronomParts = Array(props.redux.songTiming).fill(null);

    const createMetronom = function() {
        return metronomParts.map((item, index) => {
            let marker = "";
            if (
                props.redux.counterIsRun &&
                index ===
                    props.redux.counterIterationNumber % props.redux.songTiming
            ) {
                marker = "active";
            }

            return (
                <MetronomElement
                    key={index}
                    colSize={colSize}
                    marker={marker}
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
