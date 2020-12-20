import { Story, Meta } from "@storybook/react";

import MockedRouter from "@Utils/MockedRouter";

import PageHeader from "./";

export const Playground: Story = () => <PageHeader />;

export default {
	component: PageHeader,
	decorators: [
		(Story: Story) => (
			<MockedRouter>
				<Story />
			</MockedRouter>
		),
	],
	title: "Components/Organisms/Layout/PageHeader",
} as Meta;
