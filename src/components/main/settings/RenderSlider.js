import React, { Component } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Slider from "@material-ui/core/Slider";

export default class RenderSlider extends Component {
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
        // event if user release mouse key outside of slider
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
        const { input, label, min, max, init } = this.props;
        const { value } = this.state;

        return (
            <div>
                <FormControlLabel
                    value="start"
                    control={
                        <div>
                            <Slider
                                value={
                                    typeof value === "number"
                                        ? value
                                        : Number(init)
                                }
                                min={Number(min)}
                                max={Number(max)}
                                onChange={this.handleSliderChange}
                                onMouseDown={this.handleSliderMouseDown}
                                aria-labelledby="input-slider"
                            />
                            <Input
                                value={value}
                                margin="dense"
                                onChange={e => {
                                    this.handleInputChange(e);
                                    input.onChange(e);
                                }}
                                onBlur={this.handleBlur}
                                onFocus={input.onChange}
                                inputProps={{
                                    step: 1,
                                    min: { min },
                                    max: { max },
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                    ref: this.numberInputRef
                                }}
                            />
                        </div>
                    }
                    label={label}
                    labelPlacement={"start"}
                />
            </div>
        );
    }
}
