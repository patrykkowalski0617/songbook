import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = {
    controlLabel: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row-reverse"
    }
};

export class RenderSwitch extends Component {
    render() {
        const { input, label, classes } = this.props;
        return (
            <div>
                <FormControlLabel
                    value="top"
                    className={classes.controlLabel}
                    control={
                        <Switch
                            color="primary"
                            checked={input.value ? true : false}
                            onChange={input.onChange}
                        />
                    }
                    label={label}
                    labelPlacement="top"
                />
            </div>
        );
    }
}

export default withStyles(styles)(RenderSwitch);
