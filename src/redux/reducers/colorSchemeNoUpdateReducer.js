import { COLOR_SCHEME_NO_UPDATE } from "../actions/types";

const colorSchemeNoUpdateReducer = (state, action) => {
    const newState = state || 0;
    switch (action.type) {
        case COLOR_SCHEME_NO_UPDATE:
            return (state = action.payload);
        default:
            return newState;
    }
};

export default colorSchemeNoUpdateReducer;
