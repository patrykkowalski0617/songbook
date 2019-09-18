import {
    UPDATE_SEARCHED_VALUE,
    REMOVE_SEARCHED_VALUE
} from "./types";

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