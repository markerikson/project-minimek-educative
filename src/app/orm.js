import {ORM} from "redux-orm";

import Pilot from "features/pilots/Pilot";

const orm = new ORM();

orm.register(Pilot);

export default orm;