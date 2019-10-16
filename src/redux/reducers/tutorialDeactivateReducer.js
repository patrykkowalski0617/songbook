import { TUTORIAL_DEACTIVE } from "../actions/types";

const tutorialDeactivateReducer = (state = false, action) => {
    switch (action.type) {
        case TUTORIAL_DEACTIVE:
            return true;
        default:
            return state;
    }
};

export default tutorialDeactivateReducer;
