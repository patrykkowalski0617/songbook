import React from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const RenderSwitch = ({ input, label }) => (
    <div>
        <FormControlLabel
            value="start"
            control={
                <Switch
                    color="primary"
                    checked={input.value ? true : false}
                    onChange={input.onChange}
                />
            }
            label="Start"
            labelPlacement="start"
        />
    </div>
);

export default RenderSwitch;
