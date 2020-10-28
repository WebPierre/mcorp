import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";

import { pagesMetasApiMock } from "@Samples/api/mocks/page";

import Head from "./";

describe("Head component", () => {
	test("Component is rendering without crashing", () => {
		render(
			<MockedProvider addTypename={false} mocks={pagesMetasApiMock}>
				<Head pageName="cards" />
			</MockedProvider>,
		);
	});
});
