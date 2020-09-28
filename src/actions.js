import {CHANGE_SEARCH} from "./constants";

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH,
    payload: text
});
