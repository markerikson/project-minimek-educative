import _ from "lodash";
import {createReducer} from "common/utils/reducerUtils";

import {DATA_LOADED} from "features/tools/toolConstants";
import {UNIT_INFO_UPDATE} from "./unitInfoConstants";

const initialState = {
    name : "N/A",
    affiliation : "",
};

function dataLoaded(state, payload) {
    const {unit} = payload;

    return unit;
}

function updateUnitInfo(state, payload) {
    const updates = _.pick(payload, ["name", "affiliation"]);

    return {
        ...state,
        ...updates
    };
}

export default createReducer(initialState, {
    [DATA_LOADED] : dataLoaded,
    [UNIT_INFO_UPDATE] : updateUnitInfo,
});