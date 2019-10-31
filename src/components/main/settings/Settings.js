import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { RenderSwitch, RenderSlider } from "./";
import Grid from "@material-ui/core/Grid";

let Settings = props => {
    const {
        handleSubmit,
        initialValues: { start_delay },
        redux: { displaySettings, lyricsData }
    } = props;

    const tempo = lyricsData ? lyricsData.tempo : 0;

    return displaySettings ? (
        <form onSubmit={handleSubmit} style={{ background: "#777" }}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <p>Ustawienia główne</p>
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="metronom_sound"
                        component={RenderSwitch}
                        label="Dźwięk metronomu"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="start_delay"
                        component={RenderSlider}
                        label="Opóźnienie startu"
                        min="1"
                        max="4"
                        init={start_delay}
                        disabled={!start_delay}
                    />
                </Grid>

                <Grid item xs={12}>
                    <p>Ustawienia główne</p>
                </Grid>

                <Grid item xs={12}>
                    <Field
                        name="tempo"
                        component={RenderSlider}
                        label="Tempo"
                        min="10"
                        max="300"
                        init={tempo}
                        disabled={!tempo}
                    />
                </Grid>
            </Grid>
        </form>
    ) : null;
};

const mapStateToProps = state => {
    return { redux: state };
};

Settings = connect(mapStateToProps)(Settings);

export default reduxForm({
    form: "settings"
})(Settings);
