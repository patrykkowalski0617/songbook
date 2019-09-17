import { COUNTER_ITERATION, COUNTER_CLEAR_ITERATION } from "../actions/types";

const counterIterationReducer = (state = 0, action) => {
    switch (action.type) {
        case COUNTER_ITERATION:
            return state + 1;
        case COUNTER_CLEAR_ITERATION:
            return (state = 0);
        default:
            return (state = 0);
    }
};

export default counterIterationReducer;
