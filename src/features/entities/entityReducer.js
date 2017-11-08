import {
    ENTITY_UPDATE,
    ENTITY_DELETE,
    ENTITY_CREATE,
} from "./entityConstants";

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

export function deleteEntity(state, payload) {
    const {itemID, itemType} = payload;

    const session = orm.session(state);
    const ModelClass = session[itemType];

    let newState = state;

    if(ModelClass.hasId(itemID)) {
        const modelInstance = ModelClass.withId(itemID);

        modelInstance.delete();

        newState = session.state
    }

    return newState;
}

export function createEntity(state, payload) {
    const {itemType, newItemAttributes} = payload;

    const session = orm.session(state);
    const ModelClass = session[itemType];

    ModelClass.parse(newItemAttributes);

    return session.state;
}


const entityHandlers = {
    [ENTITY_UPDATE] : updateEntity,
    [ENTITY_CREATE] : createEntity,
    [ENTITY_DELETE] : deleteEntity,
};

const entityCrudFeatureReducer = createConditionalSliceReducer("entities", entityHandlers);

export default entityCrudFeatureReducer;
