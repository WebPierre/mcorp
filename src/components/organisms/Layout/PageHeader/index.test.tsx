import React from "react";
import { shallow } from "enzyme";

import PageHeader from "./";

it("renders without crashing", () => {
	shallow(<PageHeader />);
});
