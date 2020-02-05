import { keyForSavedSettings } from "../";

const getInitialValue = (key, defaultValue) => {
    let value = window.localStorage.getItem(keyForSavedSettings);
    value = value !== null ? JSON.parse(value)[key] : defaultValue;
    value = value !== undefined ? value : defaultValue;
    return value;
};

export default getInitialValue;
