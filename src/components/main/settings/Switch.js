import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { default as SwitchElement } from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = {
    controlLabel: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        color: "#FFDACF"
    }
};

const RenderSwitch = ({ input, label, classes }) => (
    <div>
        <FormControlLabel
            value="top"
            className={classes.controlLabel}
            control={
                <SwitchElement
                    color="primary"
                    checked={input.value ? true : false}
                    onChange={(e, val) => {
                        input.onChange(val);
                    }}
                />
            }
            label={label}
            labelPlacement="top"
        />
    </div>
);

export default withStyles(styles)(RenderSwitch);
