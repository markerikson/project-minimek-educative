import {combineReducers} from "redux";

import tabReducer from "features/tabs/tabsReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";

const rootReducer = combineReducers({
    unitInfo : unitInfoReducer,
    tabs : tabReducer,
});

export default rootReducer;