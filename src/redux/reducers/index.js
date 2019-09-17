import { combineReducers } from "redux";

import lyricsListToggleReducer from "./lyricsListToggleReducer";
import keepLyricsDataReducer from "./keepLyricsDataReducer";
import keepSearchResultReducer from "./keepSearchResultReducer";
import keepSearchedValueReducer from "./keepSearchedValueReducer";
import counterToggleReducer from "./counterToggleReducer";
import counterIterationReducer from "./counterIterationReducer";
import counterSetScrollDelayReducer from "./counterSetScrollDelayReducer";
import counterSetSongTimingReducer from "./counterSetSongTimingReducer";
// import metronomPlayStatusReducer from "./metronomPlayStatusReducer";

const allReducers = combineReducers({
    displayLyricsList: lyricsListToggleReducer,
    lyricsData: keepLyricsDataReducer,
    searchResult: keepSearchResultReducer,
    searchedValue: keepSearchedValueReducer,
    counterIsRun: counterToggleReducer,
    counterIterationNumber: counterIterationReducer,
    counterScrollDelay: counterSetScrollDelayReducer,
    songTiming: counterSetSongTimingReducer
    // metronomPlayStatus: metronomPlayStatusReducer
});

export default allReducers;
