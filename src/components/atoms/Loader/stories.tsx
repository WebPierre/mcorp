import React from "react";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Loader from "./";

const stories = storiesOf("components/atoms/Loader", module);

stories.add("Playground", () => {
	const style = {
		height: number("height of parent div", 300),
		width: number("width of parent div", 300),
	};

	return (
		<div style={style}>
			<Loader
				hidingPage={boolean("(props) hidingPage", false)}
				onFullPage={boolean("(props) onFullPage", false)}
			/>
		</div>
	);
});
