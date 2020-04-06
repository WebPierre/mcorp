import React from "react";
import { shallow } from "enzyme";

import { metaSample } from "@Samples/head";

import Head from "./";

it("renders without crashing", () => {
	shallow(
		<Head description={metaSample.description} title={metaSample.title} url={metaSample.url} />,
	);
});
