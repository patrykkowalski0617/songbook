import { LYRICS_DATA_FOUND, LYRICS_DATA_NOT_FOUND } from "../actions/types";

const keepLyricsDataReducer = (state = null, action) => {
    switch (action.type) {
        case LYRICS_DATA_FOUND:
            return action.payload;
        case LYRICS_DATA_NOT_FOUND:
            return state;
        default:
            return state;
    }
};

export default keepLyricsDataReducer;
