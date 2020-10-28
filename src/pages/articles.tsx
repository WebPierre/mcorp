import React, { FunctionComponent } from "react";
import { GetStaticProps } from "next";

import { initializeApiProvider } from "@Api/index";

export const getStaticProps: GetStaticProps = async () => {
	const apiProvider = initializeApiProvider();

	return {
		props: {
			initialApiProviderState: apiProvider.cache.extract(),
			name: "articles",
		},
		revalidate: 1,
	};
};

const ArticlesPage: FunctionComponent = () => {
	return <div>Articles Page</div>;
};

export default ArticlesPage;
