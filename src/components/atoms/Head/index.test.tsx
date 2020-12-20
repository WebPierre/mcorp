import { render } from "@testing-library/react";

import { pageMetas } from "@Samples/page";

import { Head } from "./";

describe("Head component", () => {
	test("Component is rendering without crashing", () => {
		render(<Head pageMetas={pageMetas} />);
	});
});
