import { UPDATE_SEARCHED_VALUE, REMOVE_SEARCHED_VALUE } from "../actions/types";

const keepSearchedValueReducer = (state = "", action) => {
    switch (action.type) {
        case UPDATE_SEARCHED_VALUE:
            return action.payload;
        case REMOVE_SEARCHED_VALUE:
            return "";
        default:
            return state;
    }
};

export default keepSearchedValueReducer;
