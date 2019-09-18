import { COUNTER_SET_SONG_TIMING } from "./types";

export const counterSetSongTiming = timing => {
    return {
        type: COUNTER_SET_SONG_TIMING,
        payload: timing
    };
};
