import React from "react";
import LyricsList from "./LyricsList";
import Lyrics from "./lyrics/Lyrics";
import styled from "styled-components";
import styleVariables from "../style_abstract/styleVariables";
import { connect } from "react-redux";

const { headerH, footerH, color, space } = styleVariables;

const MainElement = styled.main`
    height: calc(100vh - ${headerH} - ${footerH});
    background-color: ${color.light};
    color: ${color.dark};
    overflow: auto;
`;

export const ContainerElement = styled.div`
    font-size: ${space.s5};
    text-align: center;
    padding-top: ${space.s7};
`;

const Main = props => {
    const { lyricsData, displayLyricsList } = props.redux;

    return (
        <MainElement>
            <div className="container">
                <LyricsList />
                {lyricsData && !displayLyricsList ? <Lyrics /> : null}
                {!lyricsData && !displayLyricsList ? (
                    <ContainerElement>
                        <p>Wybierz piosenkę z listy</p>
                    </ContainerElement>
                ) : null}
            </div>
        </MainElement>
    );
};

const mapStateToProps = state => {
    return { redux: state };
};
export default connect(mapStateToProps)(Main);
