import {ORM} from "redux-orm";

import Mech from "features/mechs/Mech";
import MechDesign from "features/mechs/MechDesign";
import Pilot from "features/pilots/Pilot";

const orm = new ORM();

orm.register(Mech, MechDesign, Pilot);

export default orm;