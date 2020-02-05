import { keyForSavedSettings } from "../";

const saveValuesLocally = (key, value) => {
    let currentSavedSettings = window.localStorage.getItem(keyForSavedSettings);
    currentSavedSettings = JSON.parse(currentSavedSettings);

    if (currentSavedSettings !== null) {
        currentSavedSettings[key] = value;
    } else {
        currentSavedSettings = { [key]: value };
    }

    window.localStorage.setItem(
        keyForSavedSettings,
        JSON.stringify(currentSavedSettings)
    );
};

export default saveValuesLocally;
