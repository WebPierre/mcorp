import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

import logo from "./logo.png";

addons.setConfig({
	theme: create({
		base: "light",
		brandImage: logo,
		brandTitle: "MagicCorporation Storybook",
		colorPrimary: "#00415b",
		colorSecondary: "#eb7913",
	}),
});
