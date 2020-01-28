import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { RenderSwitch, RenderSlider } from "./";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
    palette: {
        primary: { main: purple[500] }, // Purple and green play nicely together.
        secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
    }
});

let Settings = props => {
    const {
        handleSubmit,
        keyForSavedSettings,
        redux: { displaySettings }
    } = props;

    const saveValuesLocally = (key, value) => {
        // console.log(key, value);
        let currentSavedSettings = window.localStorage.getItem(
            keyForSavedSettings
        );
        currentSavedSettings = JSON.parse(currentSavedSettings);

        if (currentSavedSettings !== null) {
            currentSavedSettings[key] = value;
        } else {
            currentSavedSettings = { [key]: value };
        }

        window.localStorage.setItem(
            keyForSavedSettings,
            JSON.stringify(currentSavedSettings)
        );
    };

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
                            onChange={val => {
                                saveValuesLocally("metronom_sound", val);
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            id="start_delay"
                            name="start_delay"
                            component={RenderSlider}
                            label="Opóźnienie startu"
                            min="1"
                            max="4"
                            onChange={val => {
                                if (typeof val === "number") {
                                    saveValuesLocally("start_delay", val);
                                } else {
                                    console.warn("value is not type of number");
                                }
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            id="tempo"
                            name="tempo"
                            component={RenderSlider}
                            label="Tempo"
                            min="10"
                            max="300"
                            disabled={true}
                            onChange={val => {
                                // if (typeof val === "number") {
                                //     saveValuesLocally("tempo", val);
                                // } else {
                                //     console.warn("value is not type of number");
                                // }
                            }}
                        />
                    </Grid>

                    {/* <Grid item xs={12}>
                        <p>Ustawienia główne</p>
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
