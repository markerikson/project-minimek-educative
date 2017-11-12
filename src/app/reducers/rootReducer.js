import {combineReducers} from "redux";

import {reduceReducers} from "common/utils/reducerUtils";

import entitiesReducer from "./entitiesReducer";
import editingEntitiesReducer from "./editingEntitiesReducer";
import pilotsReducer from "features/pilots/pilotsReducer";
import mechsReducer from "features/mechs/mechsReducer";
import tabReducer from "features/tabs/tabsReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";
import modalsReducer from "features/modals/modalReducer.js";
import contextMenuReducer from "features/contextMenus/contextMenuReducer";



import entityCrudReducer from "features/entities/entityReducer";
import editingFeatureReducer from "features/editing/editingReducer";


const combinedReducer = combineReducers({
    entities : entitiesReducer,
    editingEntities : editingEntitiesReducer,
    pilots : pilotsReducer,
    mechs : mechsReducer,
    unitInfo : unitInfoReducer,
    tabs : tabReducer,
    modals : modalsReducer,
    contextMenu : contextMenuReducer,
});

const rootReducer = reduceReducers(
    combinedReducer,
    entityCrudReducer,
    editingFeatureReducer,
);

export default rootReducer;