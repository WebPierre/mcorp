import React from "react";
import { shallow } from "enzyme";

import Overlay from "./";

it("renders without crashing", () => {
	shallow(<Overlay hidingPage={false} />);
});
