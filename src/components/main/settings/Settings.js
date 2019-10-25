import React from "react";
import { Field, reduxForm } from "redux-form";
import { RenderSwitch, RenderSlider } from "./";
import Grid from "@material-ui/core/Grid";

const Settings = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit} style={{ background: "#777" }}>
            <Grid container spacing={4}>
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
                        init="2"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="tempo"
                        component={RenderSlider}
                        label="Tempo"
                        min="10"
                        max="300"
                        init="75"
                    />
                </Grid>
            </Grid>
        </form>
    );
};

export default reduxForm({
    form: "settings"
})(Settings);
