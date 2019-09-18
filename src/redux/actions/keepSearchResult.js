import { UPDATE_SEARCH_RESULT, REMOVE_SEARCH_RESULT } from "./types";

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
