import {combineReducers} from "redux";

import entitiesReducer from "./entitiesReducer";
import pilotsReducer from "features/pilots/pilotsReducer";
import tabReducer from "features/tabs/tabsReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";

const rootReducer = combineReducers({
    entities : entitiesReducer,
    pilots : pilotsReducer,
    unitInfo : unitInfoReducer,
    tabs : tabReducer,
});

export default rootReducer;