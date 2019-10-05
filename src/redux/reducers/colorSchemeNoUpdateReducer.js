import { COLOR_SCHEME_NO_UPDATE } from "../actions/types";

const colorSchemeNoUpdateReducer = (state = 2, action) => {
    switch (action.type) {
        case COLOR_SCHEME_NO_UPDATE:
            return (state = action.payload);
        default:
            return (state = 2);
    }
};

export default colorSchemeNoUpdateReducer;
