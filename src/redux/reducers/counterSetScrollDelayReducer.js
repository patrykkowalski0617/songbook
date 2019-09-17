import { COUNTER_SET_SCROLL_DELAY } from "../actions/types";

const counterSetScrollDelayReducer = (state = 1, action) => {
    switch (action.type) {
        case COUNTER_SET_SCROLL_DELAY:
            return state;
        default:
            return state;
    }
};

export default counterSetScrollDelayReducer;
