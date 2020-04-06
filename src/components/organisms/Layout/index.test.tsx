import React from "react";
import { shallow } from "enzyme";

import Layout from "./";

it("renders without crashing", () => {
	shallow(<Layout>Page</Layout>);
});
