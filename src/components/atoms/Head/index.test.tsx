import React from "react";
import { render } from "@testing-library/react";

import { metaSample } from "@Samples/head";

import Head from "./";

describe("Head component", () => {
	test("Component is rendering without crashing", () => {
		render(
			<Head description={metaSample.description} title={metaSample.title} url={metaSample.url} />,
		);
	});
});
