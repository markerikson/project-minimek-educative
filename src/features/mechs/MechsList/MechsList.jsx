import React, {Component} from "react";
import {connect} from "react-redux";
import {Table} from "semantic-ui-react";

import MechsListHeader from "./MechsListHeader";
import MechsListRow from "./MechsListRow";

import {getEntitiesSession} from "features/entities/entitySelectors";

import {selectMech} from "../mechsActions";
import {selectCurrentMech} from "../mechsSelectors";


const mapState = (state) => {
    const session = getEntitiesSession(state);
    const {Mech} = session;

    const mechs = Mech.all().toModelArray().map(mechModel => mechModel.getId());

    const currentMech = selectCurrentMech(state);

    return {mechs, currentMech}
}

const actions = {
    selectMech,
};



export class MechsList extends Component {

    render() {
        const {mechs = [], currentMech, selectMech} = this.props;

        const mechRows = mechs.map(mechID => (
            <MechsListRow
                mechID={mechID}
                key={mechID}
                onMechClicked={selectMech}
                selected={mechID === currentMech}
            />
        ));

        return (
            <Table celled>
                <MechsListHeader />

                <Table.Body>
                    {mechRows}
                </Table.Body>
            </Table>
        );
    }
}

export default connect(mapState, actions)(MechsList);