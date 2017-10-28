import React from "react";
import {connect} from "react-redux";
import {Form, Dropdown, Segment} from "semantic-ui-react";

import {selectUnitInfo} from "./unitInfoSelectors";


const FACTIONS = [
    {value : "cc", text : "Capellan Confederation"},
    {value : "dc", text : "Draconis Combine"},
    {value : "fs", text : "Federated Suns"},
    {value : "fwl", text : "Free Worlds League"},
    {value : "lc", text : "Lyran Commonwealth"},
    {value : "wd", text : "Wolf's Dragoons"}
];


const mapState = (state) => ({
    unitInfo : selectUnitInfo(state),
});


const UnitInfo = ({unitInfo = {}}) => {
    const {name, affiliation} = unitInfo;

    return (
        <Segment attached="bottom">
            <Form size="large">
                <Form.Field name="name" width={6} >
                    <label>Unit Name</label>
                    <input placeholder="Name" value={name}/>
                </Form.Field>
                <Form.Field name="affiliation" width={6}>
                    <label>Affiliation</label>
                    <Dropdown
                        selection
                        options={FACTIONS}
                        value={affiliation}
                    />
                </Form.Field>
            </Form>
        </Segment>
    );
};


export default connect(mapState)(UnitInfo);