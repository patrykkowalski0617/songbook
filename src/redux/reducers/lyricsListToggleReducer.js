import { LYRICS_LIST_TOOGLE } from "../actions/types";

const lyricsListToggleReducer = (state = false, action) => {
    switch (action.type) {
        case LYRICS_LIST_TOOGLE:
            return !state;
        default:
            return state;
    }
};

export default lyricsListToggleReducer;
