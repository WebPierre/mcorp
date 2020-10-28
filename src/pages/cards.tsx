import React, { FunctionComponent } from "react";
import { GetStaticProps } from "next";

import { initializeApiProvider } from "@Api/index";

export const getStaticProps: GetStaticProps = async () => {
	const apiProvider = initializeApiProvider();

	return {
		props: {
			initialApiProviderState: apiProvider.cache.extract(),
			name: "cards",
		},
		revalidate: 1,
	};
};

const CardsPage: FunctionComponent = () => {
	return <div>Cards Page</div>;
};

export default CardsPage;
