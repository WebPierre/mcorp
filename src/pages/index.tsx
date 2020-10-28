import React, { FunctionComponent } from "react";
import { GetStaticProps } from "next";

import { initializeApiProvider } from "@Api/index";

export const getStaticProps: GetStaticProps = async () => {
	const apiProvider = initializeApiProvider();

	return {
		props: {
			initialApiProviderState: apiProvider.cache.extract(),
			name: "home",
		},
		revalidate: 1,
	};
};

const HomePage: FunctionComponent = () => {
	return <div>Home Page</div>;
};

export default HomePage;
