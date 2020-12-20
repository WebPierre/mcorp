import { render } from "@testing-library/react";

import MockedRouter from "@Utils/MockedRouter";

import { Layout } from "./";

describe("Layout component", () => {
	test("Component is rendering without crashing", () => {
		render(
			<MockedRouter>
				<Layout loading={false}>Page</Layout>
			</MockedRouter>
		);
	});
});
