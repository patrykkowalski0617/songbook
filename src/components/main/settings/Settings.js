// At the moment this is only one part of aplication which use Material UI

import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Switch, Slider, Select } from "./";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { colorScheme, space } from "../../../style";
import { saveValuesLocally } from "./";
import { withStyles } from "@material-ui/core/styles";
import { formValueSelector } from "redux-form";

const selector = formValueSelector("settings");

const styles = {
    form: {
        maxWidth: "300px",
        margin: `${space.s7} auto`
    }
};

let Settings = ({
    handleSubmit,
    colorSchemeNo,
    classes,
    redux: { displaySettings }
}) => {
    const theme = createMuiTheme({
        palette: {
            type: "dark",
            text: {
                primary: colorScheme[colorSchemeNo].light1,
                secondary: colorScheme[colorSchemeNo].light2,
                disabled: colorScheme[colorSchemeNo].muted
            },
            primary: {
                main: colorScheme[colorSchemeNo].primary1
            },
            secondary: {
                main: colorScheme[colorSchemeNo].secondary1
            }
        }
    });

    const colorSchemeOptions = colorScheme.map((item, index) => {
        return (
            <option key={index} value={index}>
                {item.name}
            </option>
        );
    });

    return displaySettings ? (
        <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <p>Main settings</p>
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
                    <Grid item xs={12}>
                        <Field
                            id="color_scheme_no"
                            name="color_scheme_no"
                            component={Select}
                            label="Skin"
                            colorSchemeNo={colorSchemeNo}
                            onChange={e => {
                                const val = e.target.value;
                                saveValuesLocally("color_scheme_no", val);
                            }}
                        >
                            {colorSchemeOptions}
                        </Field>
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

const mapStateToProps = state => ({
    redux: state,
    colorSchemeNo: selector(state, "color_scheme_no") || 0
});

Settings = connect(mapStateToProps)(Settings);

export default reduxForm({
    form: "settings"
})(withStyles(styles)(Settings));
