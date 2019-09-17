import { UPDATE_SEARCH_RESULT, REMOVE_SEARCH_RESULT } from "../actions/types";

const keepLyricsDataReducer = (state = null, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_RESULT:
            return action.payload;
        case REMOVE_SEARCH_RESULT:
            return state;
        default:
            return state;
    }
};

export default keepLyricsDataReducer;
