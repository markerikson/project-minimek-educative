import {Model, attr} from "redux-orm";

export default class MechDesign extends Model {
    static modelName = "MechDesign";

    static fields = {
        id : attr(),
        name : attr(),
        weight : attr(),
    }

    static parse(designData) {
        return this.create(designData);
    }

    toJSON() {
        return {...this.ref};
    }

    updateFrom(otherDesign) {
        this.update(otherDesign.ref);
    }

}
