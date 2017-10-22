import {createReducer} from "common/utils/reducerUtils";

import orm from "app/orm"

const initialState = orm.getEmptyState()

export default createReducer(initialState, {
});
