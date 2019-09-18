import { LYRICS_DATA_FOUND, LYRICS_DATA_NOT_FOUND } from "./types";

export const keepLyricsData = lyricsData => {
    let type;
    if (lyricsData) {
        type = LYRICS_DATA_FOUND;
    } else {
        type = LYRICS_DATA_NOT_FOUND;
    }

    return {
        type,
        payload: lyricsData
    };
};
