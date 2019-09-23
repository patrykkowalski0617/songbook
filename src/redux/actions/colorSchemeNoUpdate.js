import { COLOR_SCHEME_NO_UPDATE } from "./types";

export const colorSchemeNoUpdate = no => {
    let type;
    if (no) {
        type = COLOR_SCHEME_NO_UPDATE;
    }

    return {
        type,
        payload: no
    };
};
