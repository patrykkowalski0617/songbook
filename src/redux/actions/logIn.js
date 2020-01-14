import { LOG_IN } from "./types";

export const logIn = data => {
    return {
        type: LOG_IN,
        payload: data
    };
};
