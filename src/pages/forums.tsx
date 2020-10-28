import React, { FunctionComponent } from "react";
import { GetStaticProps } from "next";

import { initializeApiProvider } from "@Api/index";

export const getStaticProps: GetStaticProps = async () => {
	const apiProvider = initializeApiProvider();

	return {
		props: {
			initialApiProviderState: apiProvider.cache.extract(),
			name: "forums",
		},
		revalidate: 1,
	};
};

const ForumsPage: FunctionComponent = () => {
	return <div>Forums Page</div>;
};

export default ForumsPage;
