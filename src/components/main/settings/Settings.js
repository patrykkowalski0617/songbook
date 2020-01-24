import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
    RenderSwitch
    // , RenderSlider
} from "./";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
    palette: {
        primary: { main: purple[500] }, // Purple and green play nicely together.
        secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
    }
});

let Settings = ({ handleSubmit, redux: { displaySettings, lyricsData } }) => {
    return displaySettings ? (
        <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <p>Ustawienia główne</p>
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            id="metronom_sound"
                            name="metronom_sound"
                            component={RenderSwitch}
                            label="Dźwięk metronomu"
                            type="checkbox"
                        />
                    </Grid>
                    {/* <Grid item xs={12}>
                        <Field
                            name="start_delay"
                            component={RenderSlider}
                            label="Opóźnienie startu"
                            min="1"
                            max="4"
                            init={initialValues.start_delay}
                            disabled={!initialValues.start_delay}
                        />
                    </Grid> */}

                    {/* <Grid item xs={12}>
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
                    </Grid> */}
                </Grid>
            </form>
        </ThemeProvider>
    ) : null;
};

const mapStateToProps = state => {
    return { redux: state };
};

Settings = connect(mapStateToProps)(Settings);

export default reduxForm({
    form: "settings"
})(Settings);
