import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import { default as SliderElement } from "@material-ui/core/Slider";

const styles = {
    controlLabel: {
        alignItems: "start",
        display: "flex"
    }
};

const Slider = ({ classes, input, label, min, max, disabled }) => (
    <div>
        <FormControlLabel
            value="top"
            className={classes.controlLabel}
            control={
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={9}>
                        <SliderElement
                            value={
                                typeof input.value === "number"
                                    ? input.value
                                    : Number(input.value)
                            }
                            min={Number(min)}
                            max={Number(max)}
                            onChange={(e, val) => {
                                input.onChange(val);
                            }}
                            aria-labelledby="input-slider"
                            disabled={disabled}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Input
                            value={
                                typeof input.value === "number"
                                    ? input.value
                                    : Number(input.value)
                            }
                            margin="dense"
                            disabled={disabled}
                            onChange={e => {
                                input.onChange(e);
                            }}
                            inputProps={{
                                step: 1,
                                min: Number(min),
                                max: Number(max),
                                type: "number",
                                "aria-labelledby": "input-slider",
                                onChange: e => {
                                    input.onChange(e.target.valueAsNumber);
                                }
                            }}
                        />
                    </Grid>
                </Grid>
            }
            label={label}
            labelPlacement={"top"}
        />
    </div>
);

export default withStyles(styles)(Slider);
