import { combineReducers } from "redux";

import lyricsListToggleReducer from "./lyricsListToggleReducer";
import keepLyricsDataReducer from "./keepLyricsDataReducer";
import keepSearchResultReducer from "./keepSearchResultReducer";
import keepSearchedValueReducer from "./keepSearchedValueReducer";
import counterToggleReducer from "./counterToggleReducer";
import counterIterationReducer from "./counterIterationReducer";
import counterSetScrollDelayReducer from "./counterSetScrollDelayReducer";
import counterSetSongTimingReducer from "./counterSetSongTimingReducer";
import colorSchemeNoUpdateReducer from "./colorSchemeNoUpdateReducer";
import tutorialDeactivateReducer from "./tutorialDeactivateReducer";
import tutorialNextStepReducer from "./tutorialNextStepReducer";
import lyricsLastBarIsMarkedReducer from "./lyricsLastBarIsMarkedReducer";
import logInReducer from "./logInReducer";

const allReducers = combineReducers({
    displayLyricsList: lyricsListToggleReducer,
    lyricsData: keepLyricsDataReducer,
    searchResult: keepSearchResultReducer,
    searchedValue: keepSearchedValueReducer,
    counterIsRun: counterToggleReducer,
    counterIterationNumber: counterIterationReducer,
    counterScrollDelay: counterSetScrollDelayReducer,
    songTiming: counterSetSongTimingReducer,
    colorSchemeNo: colorSchemeNoUpdateReducer,
    tutorialIsInactive: tutorialDeactivateReducer,
    tutorialStep: tutorialNextStepReducer,
    lyricsIsLastBarMarked: lyricsLastBarIsMarkedReducer,
    loggedIn: logInReducer
});

export default allReducers;
