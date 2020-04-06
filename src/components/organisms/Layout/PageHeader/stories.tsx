import React from "react";
import { storiesOf } from "@storybook/react";

import RouterMock from "@Storybook/routerMock";

import PageHeader from "./";

const stories = storiesOf("components/organisms/Layout/PageHeader", module);

stories.add("Playground", () => {
	return (
		<RouterMock>
			<PageHeader />
		</RouterMock>
	);
});
