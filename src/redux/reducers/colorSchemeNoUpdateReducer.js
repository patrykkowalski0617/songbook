import { COLOR_SCHEME_NO_UPDATE } from "../actions/types";

const colorSchemeNoUpdateReducer = (state = 0, action) => {
    console.log(action.type);
    switch (action.type) {
        case COLOR_SCHEME_NO_UPDATE:
            return (state = action.payload);
        default:
            return (state = 0);
    }
};

export default colorSchemeNoUpdateReducer;
