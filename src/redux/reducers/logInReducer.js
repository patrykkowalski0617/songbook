import { LOG_IN } from "../actions/types";

const logInReducer = (data = null, action) => {
    switch (action.type) {
        case LOG_IN:
            return action.payload;
        default:
            return data;
    }
};

export default logInReducer;
