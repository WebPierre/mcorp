import { Story, Meta } from "@storybook/react";

import MockedRouter from "@Utils/MockedRouter";

import { Layout, Props } from "./";

export const Playground: Story<Props> = (args) => <Layout {...args}>Page</Layout>;

export default {
	argTypes: {
		loading: { name: "(props) loading", control: { type: "boolean" } },
	},
	component: Layout,
	decorators: [
		(Story: Story) => (
			<MockedRouter>
				<Story />
			</MockedRouter>
		),
	],
	title: "Components/Organisms/Layout",
} as Meta;
