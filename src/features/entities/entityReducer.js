import {ENTITY_UPDATE} from "./entityConstants";

import {createConditionalSliceReducer} from "common/utils/reducerUtils";

import orm from "app/orm";

export function updateEntity(state, payload) {
    const {itemType, itemID, newItemAttributes} = payload;

    const session = orm.session(state);
    const ModelClass = session[itemType];

    let newState = state;

    if(ModelClass.hasId(itemID)) {
        const modelInstance = ModelClass.withId(itemID);

        modelInstance.update(newItemAttributes);

        newState = session.state;
    }

    return newState;
}

const entityHandlers = {
    [ENTITY_UPDATE] : updateEntity,
};

const entityCrudFeatureReducer = createConditionalSliceReducer("entities", entityHandlers);

export default entityCrudFeatureReducer;
