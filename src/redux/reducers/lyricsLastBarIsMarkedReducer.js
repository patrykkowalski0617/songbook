import {
    LYRICS_LAST_BAR_IS_MARKED,
    LYRICS_LAST_BAR_IS_NOT_MARKED
} from "../actions/types";

const lyricsLastBarIsMarkedReducer = (state = false, action) => {
    switch (action.type) {
        case LYRICS_LAST_BAR_IS_MARKED:
            return true;
        case LYRICS_LAST_BAR_IS_NOT_MARKED:
            return false;
        default:
            return state;
    }
};

export default lyricsLastBarIsMarkedReducer;
