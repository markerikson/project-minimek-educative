import {createReducer} from "common/utils/reducerUtils";

import orm from "app/orm";
const defaultEditingEntities = orm.getEmptyState();

export default createReducer(defaultEditingEntities, {
});
