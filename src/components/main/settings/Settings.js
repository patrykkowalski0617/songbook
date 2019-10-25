import React from "react";
import { Field, reduxForm } from "redux-form";
import { RenderSwitch, RenderSlider } from "./";

const Settings = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit} style={{ background: "#fff" }}>
            <Field name="switch" component={RenderSwitch} label="switch" />
            <Field
                name="slider"
                component={RenderSlider}
                label="slider"
                min="10"
                max="300"
                init="75"
            />
        </form>
    );
};

export default reduxForm({
    form: "settings"
})(Settings);
