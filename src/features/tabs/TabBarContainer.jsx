import {connect} from "react-redux";

import TabBar from "./TabBar";

import {selectCurrentTab} from "./tabsSelectors";
import {selectTab} from "./tabsActions";

const mapState = (state) => {
    const currentTab = selectCurrentTab(state);

    return {currentTab};
}

const actions = {onTabClick : selectTab};

export default connect(mapState, actions)(TabBar);