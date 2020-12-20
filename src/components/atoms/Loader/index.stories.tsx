import { Story, Meta } from "@storybook/react";

import Loader, { Props } from "./";

export const Playground: Story<Props> = (args) => <Loader {...args} />;

Playground.args = {
	hidingPage: false,
	onFullPage: false,
};

export default {
	argTypes: {
		hidingPage: { name: "(props) hidingPage", control: { type: "boolean" } },
		onFullPage: { name: "(props) onFullPage", control: { type: "boolean" } },
	},
	component: Loader,
	decorators: [
		(Story: Story) => (
			<div style={{ height: "300px", width: "300px" }}>
				<Story />
			</div>
		),
	],
	title: "Components/Atoms/Loader",
} as Meta;
