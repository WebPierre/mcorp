import React from "react";
import { render } from "@testing-library/react";

import { pageCategorySample } from "@Samples/page";
import RouterMock from "@Utils/routerMock";

import PageHeaderItem from "./";

describe("PageHeaderItem component", () => {
	test("Component is rendering without crashing", () => {
		render(
			<RouterMock>
				<PageHeaderItem item={pageCategorySample} />
			</RouterMock>,
		);
	});
});
