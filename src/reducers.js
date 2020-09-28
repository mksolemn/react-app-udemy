import {CHANGE_SEARCH} from "./constants";

const initialState = {
    searchField: ''
};
export const searchRobots = (state=initialState,action={})=>{
    switch (action.type) {
        case CHANGE_SEARCH:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
};
