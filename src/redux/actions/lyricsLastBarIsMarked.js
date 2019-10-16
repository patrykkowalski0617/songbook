import {
    LYRICS_LAST_BAR_IS_MARKED,
    LYRICS_LAST_BAR_IS_NOT_MARKED
} from "./types";

export const lyricsLastBarIsMarked = isMarked => {
    let type;
    if (isMarked) {
        type = LYRICS_LAST_BAR_IS_MARKED;
    } else {
        type = LYRICS_LAST_BAR_IS_NOT_MARKED;
    }

    return {
        type
    };
};
