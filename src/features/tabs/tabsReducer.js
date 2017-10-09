import {createReducer} from "common/utils/reducerUtils";

import {TAB_SELECTED} from "./tabsConstants";

const initialState = {
    currentTab : "unitInfo",
};

export function selectTab(state, payload) {
    return {
        currentTab : payload.tabName,
    };
}

export default createReducer(initialState, {
    [TAB_SELECTED] : selectTab,
});
