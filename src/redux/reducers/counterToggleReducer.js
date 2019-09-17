import { COUNTER_TOGGLE } from "../actions/types";

const counterToggleReducer = (state = false, action) => {
    switch (action.type) {
        case COUNTER_TOGGLE:
            return !state;
        default:
            return state;
    }
};

export default counterToggleReducer;
