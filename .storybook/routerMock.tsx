import React, { FunctionComponent, ReactNode, useState } from "react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import Router from "next/router";
import { action } from "@storybook/addon-actions";

interface Props {
	children: ReactNode;
}

const RouterMock: FunctionComponent<Props> = ({ children }) => {
	const [pathname, setPathname] = useState("/");
	const routerMock = {
		asPath: "",
		back: () => null,
		beforePopState: () => null,
		events: {
			emit: () => null,
			off: () => null,
			on: () => null,
		},
		isFallback: false,
		pathname,
		prefetch: async () => undefined,
		push: async (newPathname: string) => {
			action("onItemClick")(newPathname);

			setPathname(newPathname);

			return true;
		},
		query: {},
		reload: () => null,
		replace: async () => true,
		route: "",
	};

	// @ts-ignore
	Router.router = routerMock;

	return <RouterContext.Provider value={routerMock}>{children}</RouterContext.Provider>;
};

export default RouterMock;
