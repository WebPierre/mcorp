import React, { FunctionComponent } from "react";
import { GetStaticProps } from "next";

import { initializeApiProvider } from "@Api/index";

export const getStaticProps: GetStaticProps = async () => {
	const apiProvider = initializeApiProvider();

	return {
		props: {
			initialApiProviderState: apiProvider.cache.extract(),
			name: "shop",
		},
		revalidate: 1,
	};
};

const ShopPage: FunctionComponent = () => {
	return <div>Shop Page</div>;
};

export default ShopPage;
