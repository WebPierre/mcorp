import { render } from "@testing-library/react";

import MockedRouter from "@Utils/MockedRouter";

import PageHeader from "./";

describe("PageHeader component", () => {
	test("Component is rendering without crashing", () => {
		render(
			<MockedRouter>
				<PageHeader />
			</MockedRouter>
		);
	});
});
