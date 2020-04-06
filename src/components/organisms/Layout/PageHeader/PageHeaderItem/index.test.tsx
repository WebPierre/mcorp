import React from "react";
import { shallow } from "enzyme";

import { pageCategorySample } from "@Samples/page";

import PageHeaderItem from "./";

it("renders without crashing", () => {
	shallow(<PageHeaderItem item={pageCategorySample} />);
});
