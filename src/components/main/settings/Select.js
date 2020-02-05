import React from "react";
import { default as SelectElement } from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    formControl: {
        display: "flex"
    }
};

const RenderSelect = ({ input, label, children, classes, colorSchemeNo }) => (
    <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
        <SelectElement
            native
            {...input}
            inputProps={{
                name: "age",
                id: "age-native-simple"
            }}
        >
            {children}
        </SelectElement>
    </FormControl>
);

export default withStyles(styles)(RenderSelect);
