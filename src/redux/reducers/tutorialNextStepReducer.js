import { TUTORIAL_NEXT_STEP } from "../actions/types";

const tutorialNextStepReducer = (state = 0, action) => {
    let step = state;
    switch (action.type) {
        case TUTORIAL_NEXT_STEP:
            step++;
            return step;
        default:
            return state;
    }
};

export default tutorialNextStepReducer;
