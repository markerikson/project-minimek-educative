import {combineReducers} from "redux";

import {reduceReducers} from "common/utils/reducerUtils";

import entitiesReducer from "./entitiesReducer";
import pilotsReducer from "features/pilots/pilotsReducer";
import mechsReducer from "features/mechs/mechsReducer";
import tabReducer from "features/tabs/tabsReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";

const combinedReducer = combineReducers({
    entities : entitiesReducer,
    pilots : pilotsReducer,
    mechs : mechsReducer,
    unitInfo : unitInfoReducer,
    tabs : tabReducer,
});

const rootReducer = reduceReducers(
    combinedReducer,
);

export default rootReducer;