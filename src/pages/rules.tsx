import React, { FunctionComponent } from "react";
import { GetStaticProps } from "next";

import { initializeApiProvider } from "@Api/index";

export const getStaticProps: GetStaticProps = async () => {
	const apiProvider = initializeApiProvider();

	return {
		props: {
			initialApiProviderState: apiProvider.cache.extract(),
			name: "rules",
		},
		revalidate: 1,
	};
};

const RulesPage: FunctionComponent = () => {
	return <div>Rules Page</div>;
};

export default RulesPage;
