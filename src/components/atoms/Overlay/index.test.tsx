import { render } from "@testing-library/react";

import Overlay from "./";

describe("Overlay component", () => {
	test("Component is rendering without crashing", () => {
		render(<Overlay hidingPage={false} />);
	});
});
