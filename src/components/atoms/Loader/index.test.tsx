import React from "react";
import { render } from "@testing-library/react";

import Loader from "./";

describe("Loader component", () => {
	test("Component is rendering without crashing", () => {
		render(<Loader hidingPage={false} onFullPage={false} />);
	});
});
