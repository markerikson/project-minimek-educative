import {TAB_SELECTED} from "./tabsConstants";

export function selectTab(tabName) {
    return {
        type : TAB_SELECTED,
        payload : {tabName},
    };
}