import { render } from "@testing-library/react";

import { pageCategorySample } from "@Samples/page";
import MockedRouter from "@Utils/MockedRouter";

import PageHeaderItem from "./";

describe("PageHeaderItem component", () => {
	test("Component is rendering without crashing", () => {
		render(
			<MockedRouter>
				<PageHeaderItem item={pageCategorySample} />
			</MockedRouter>
		);
	});
});
