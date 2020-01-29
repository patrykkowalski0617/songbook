import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Switch, Slider } from "./";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { colorScheme } from "../../style";

let Settings = ({
    handleSubmit,
    keyForSavedSettings,
    redux: { displaySettings, colorSchemeNo }
}) => {
    const theme = createMuiTheme({
        palette: {
            primary: { main: colorScheme[colorSchemeNo].primary1 },
            secondary: { main: colorScheme[colorSchemeNo].secondary1 },
            text: { primary: "#FFDACF" }
        }
    });

    const saveValuesLocally = (key, value) => {
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
                            component={Switch}
                            label="Metronom sound"
                            onChange={val => {
                                saveValuesLocally("metronom_sound", val);
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            id="start_delay"
                            name="start_delay"
                            component={Slider}
                            label="Start delay [bars]"
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

                    {/* <Grid item xs={12}>
                        <Field
                            id="tempo"
                            name="tempo"
                            component={Slider}
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
