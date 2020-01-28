import React, { Component } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Slider from "@material-ui/core/Slider";

const styles = {
    controlLabel: {
        alignItems: "start",
        display: "flex"
    }
};

class RenderSlider extends Component {
    state = {
        value: this.props.init,
        sliderClicked: false
    };

    numberInputRef = React.createRef();

    handleSliderChange = (event, newValue) => {
        this.setState({ value: newValue });
    };

    handleInputChange = event => {
        this.setState({
            value: event.target.value === "" ? "" : Number(event.target.value)
        });
    };

    handleBlur = () => {
        const { min, max } = this.props;
        if (this.state.value < min) {
            this.setState({ value: min });
        } else if (this.state.value > max) {
            this.setState({ value: max });
        }
    };

    handleKeyUp = e => {
        // force redux-form to update value
        // even if user release mouse key outside of slider
        if (this.state.sliderClicked) {
            this.numberInputRef.current.focus();
        }
        this.setState({ mouseKeyPosition: "up", sliderClicked: false });
    };

    handleSliderMouseDown = () => {
        this.setState({ sliderClicked: true });
    };

    componentDidMount() {
        document.body.addEventListener("mouseup", this.handleKeyUp);
    }

    componentWillUnmount() {
        document.body.removeEventListener("mouseup", this.handleKeyUp);
    }

    render() {
        const { classes, input, label, min, max, disabled } = this.props;

        return (
            <div>
                <FormControlLabel
                    value="top"
                    className={classes.controlLabel}
                    control={
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={9}>
                                <Slider
                                    value={
                                        typeof input.value === "number"
                                            ? input.value
                                            : Number(input.value)
                                    }
                                    min={Number(min)}
                                    max={Number(max)}
                                    onChange={(e, val) => {
                                        input.onChange(val);
                                        this.handleSliderChange(e);
                                    }}
                                    onMouseDown={this.handleSliderMouseDown}
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
                                        console.log("change in num");
                                        input.onChange(e);
                                        this.handleInputChange(e);
                                    }}
                                    inputProps={{
                                        step: 1,
                                        min: Number(min),
                                        max: Number(max),
                                        type: "number",
                                        "aria-labelledby": "input-slider",
                                        ref: this.numberInputRef,
                                        onChange: e => {
                                            input.onChange(
                                                e.target.valueAsNumber
                                            );
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
    }
}

export default withStyles(styles)(RenderSlider);
