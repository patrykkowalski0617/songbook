import { COLOR_SCHEME_NO_UPDATE } from "./types";

export const colorSchemeNoUpdate = no => {
    return {
        type: COLOR_SCHEME_NO_UPDATE,
        payload: no
    };
};
