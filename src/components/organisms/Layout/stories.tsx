import React from "react";
import { storiesOf } from "@storybook/react";

import RouterMock from "@Storybook/routerMock";

import Layout from "./";

const stories = storiesOf("components/organisms/Layout", module);

stories.add("Playground", () => {
	return (
		<RouterMock>
			<Layout>Page</Layout>
		</RouterMock>
	);
});
