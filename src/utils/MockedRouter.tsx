import React, { FunctionComponent, ReactElement, useState } from "react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { action } from "@storybook/addon-actions";

interface Props {
	children: ReactElement;
}

const MockedRouter: FunctionComponent<Props> = ({ children }) => {
	const [pathname, setPathname] = useState("/");
	const routerMock = {
		asPath: pathname,
		back: () => null,
		basePath: "",
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
			action("onClickItem")(newPathname);

			setPathname(newPathname);

			return true;
		},
		query: {},
		reload: () => null,
		replace: async () => true,
		route: pathname,
	};

	return <RouterContext.Provider value={routerMock}>{children}</RouterContext.Provider>;
};

export default MockedRouter;
