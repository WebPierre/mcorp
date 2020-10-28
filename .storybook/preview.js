import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, addParameters } from "@storybook/react";

import { theme } from "./manager";
import "../src/index.scss";

addDecorator(withKnobs);

addParameters({
	options: {
		theme,
	},
});
