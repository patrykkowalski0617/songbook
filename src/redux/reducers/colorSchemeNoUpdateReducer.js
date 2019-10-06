import { COLOR_SCHEME_NO_UPDATE } from "../actions/types";

const colorSchemeNoUpdateReducer = (state = 0, action) => {
    switch (action.type) {
        case COLOR_SCHEME_NO_UPDATE:
            state = action.payload;
            return state;
        default:
            return state;
    }
};

export default colorSchemeNoUpdateReducer;
