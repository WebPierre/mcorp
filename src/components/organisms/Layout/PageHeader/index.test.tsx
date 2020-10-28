import React from "react";
import { render } from "@testing-library/react";

import RouterMock from "@Utils/routerMock";

import PageHeader from "./";

describe("PageHeader component", () => {
	test("Component is rendering without crashing", () => {
		render(
			<RouterMock>
				<PageHeader />
			</RouterMock>,
		);
	});
});
