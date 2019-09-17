import { COUNTER_SET_SONG_TIMING } from "../actions/types";

const counterSetSongTimingReducer = (state = 0, action) => {
    switch (action.type) {
        case COUNTER_SET_SONG_TIMING:
            state = action.payload;
            return state;
        default:
            return state;
    }
};

export default counterSetSongTimingReducer;
