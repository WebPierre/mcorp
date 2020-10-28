import React, { FunctionComponent } from "react";
import { GetStaticProps } from "next";

import { initializeApiProvider } from "@Api/index";

export const getStaticProps: GetStaticProps = async () => {
	const apiProvider = initializeApiProvider();

	return {
		props: {
			initialApiProviderState: apiProvider.cache.extract(),
			name: "extensions",
		},
		revalidate: 1,
	};
};

const ExtensionsPage: FunctionComponent = () => {
	return <div>Extensions Page</div>;
};

export default ExtensionsPage;
