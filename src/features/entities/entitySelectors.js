import {createSelector} from "reselect";

import orm from "app/orm";

export const selectEntities = state => state.entities;

export const getEntitiesSession = createSelector(
    selectEntities,
    entities => orm.session(entities)
);
