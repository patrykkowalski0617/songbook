import { combineReducers } from "redux";

import lyricsListToggleReducer from "./lyricsListToggleReducer";
import settingsToggleReducer from "./settingsToggleReducer";
import keepLyricsDataReducer from "./keepLyricsDataReducer";
import keepSearchResultReducer from "./keepSearchResultReducer";
import keepSearchedValueReducer from "./keepSearchedValueReducer";
import counterToggleReducer from "./counterToggleReducer";
import counterIterationReducer from "./counterIterationReducer";
import counterSetSongTimingReducer from "./counterSetSongTimingReducer";
import colorSchemeNoUpdateReducer from "./colorSchemeNoUpdateReducer";
import tutorialDeactivateReducer from "./tutorialDeactivateReducer";
import tutorialNextStepReducer from "./tutorialNextStepReducer";
import lyricsLastBarIsMarkedReducer from "./lyricsLastBarIsMarkedReducer";
import logInReducer from "./logInReducer";
import { reducer as formReducer } from "redux-form";

const allReducers = combineReducers({
    displayLyricsList: lyricsListToggleReducer,
    displaySettings: settingsToggleReducer,
    lyricsData: keepLyricsDataReducer,
    searchResult: keepSearchResultReducer,
    searchedValue: keepSearchedValueReducer,
    counterIsRun: counterToggleReducer,
    counterIterationNumber: counterIterationReducer,
    songTiming: counterSetSongTimingReducer,
    colorSchemeNo: colorSchemeNoUpdateReducer,
    tutorialIsInactive: tutorialDeactivateReducer,
    tutorialStep: tutorialNextStepReducer,
    lyricsIsLastBarMarked: lyricsLastBarIsMarkedReducer,
    loggedIn: logInReducer,
    form: formReducer
});

export default allReducers;
