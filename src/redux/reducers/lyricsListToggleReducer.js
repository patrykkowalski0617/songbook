import { LYRICS_LIST_TOGGLE } from "../actions/types";

const lyricsListToggleReducer = (state = false, action) => {
    switch (action.type) {
        case LYRICS_LIST_TOGGLE:
            return !state;
        default:
            return state;
    }
};

export default lyricsListToggleReducer;
