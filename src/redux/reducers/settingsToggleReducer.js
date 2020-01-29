import { SETTINGS_TOGGLE } from "../actions/types";

const settingsToggleReducer = (state = false, action) => {
    switch (action.type) {
        case SETTINGS_TOGGLE:
            return !state;
        default:
            return state;
    }
};

export default settingsToggleReducer;
