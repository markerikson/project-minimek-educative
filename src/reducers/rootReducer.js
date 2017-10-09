import {combineReducers} from "redux";

import tabsReducer from "features/tabs/tabsReducer";

const rootReducer = combineReducers({
    tabs : tabsReducer
});

export default rootReducer;