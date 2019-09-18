import { COUNTER_ITERATION, COUNTER_CLEAR_ITERATION } from "./types";

export const counterIteration = iterate => {
    let type;
    if (iterate) {
        type = COUNTER_ITERATION;
    } else {
        type = COUNTER_CLEAR_ITERATION;
    }

    return {
        type
    };
};
