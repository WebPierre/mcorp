import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, addParameters, configure } from "@storybook/react";

import { theme } from "./theme";

const loadStories = () => {
	const req = require.context("../src", true, /stories\.tsx$/);

	req.keys().forEach(req);
};

addDecorator(withKnobs);

addParameters({
	options: {
		theme,
	},
});

configure(loadStories, module);
