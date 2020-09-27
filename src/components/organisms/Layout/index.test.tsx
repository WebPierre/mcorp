import React from "react";
import { render } from "@testing-library/react";

import RouterMock from "@Utils/routerMock";

import Layout from "./";

describe("Layout component", () => {
	test("Component is rendering without crashing", () => {
		render(
			<RouterMock>
				<Layout>Page</Layout>
			</RouterMock>,
		);
	});
});
