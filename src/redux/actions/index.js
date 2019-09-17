import {
    LYRICS_LIST_TOOGLE,
    LYRICS_DATA_FOUND,
    LYRICS_DATA_NOT_FOUND,
    UPDATE_SEARCH_RESULT,
    REMOVE_SEARCH_RESULT,
    UPDATE_SEARCHED_VALUE,
    REMOVE_SEARCHED_VALUE,
    COUNTER_TOGGLE,
    COUNTER_ITERATION,
    COUNTER_CLEAR_ITERATION,
    COUNTER_SET_SCROLL_DELAY,
    COUNTER_SET_SONG_TIMING
} from "./types";

export const lyricsListToggle = () => {
    return {
        type: LYRICS_LIST_TOOGLE
    };
};

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

export const keepSearchResult = searchResult => {
    let type;
    if (searchResult) {
        type = UPDATE_SEARCH_RESULT;
    } else {
        type = REMOVE_SEARCH_RESULT;
    }

    return {
        type,
        payload: searchResult
    };
};

export const keepSearchedValue = searchedValue => {
    let type;
    if (searchedValue) {
        type = UPDATE_SEARCHED_VALUE;
    } else {
        type = REMOVE_SEARCHED_VALUE;
    }

    return {
        type,
        payload: searchedValue
    };
};

export const counterToggle = () => {
    return { type: COUNTER_TOGGLE };
};

export const counterIteration = iterate => {
    let type;
    if (iterate) {
        type = COUNTER_ITERATION;
    } else {
        type = COUNTER_CLEAR_ITERATION;
    }

    return {
        type
    };
};

export const counterSetScrollDelay = () => {
    return {
        type: COUNTER_SET_SCROLL_DELAY
    };
};

export const counterSetSongTiming = timing => {
    return {
        type: COUNTER_SET_SONG_TIMING,
        payload: timing
    };
};
