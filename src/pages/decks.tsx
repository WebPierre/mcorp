import React, { FunctionComponent } from "react";
import { GetStaticProps } from "next";

import { initializeApiProvider } from "@Api/index";

export const getStaticProps: GetStaticProps = async () => {
	const apiProvider = initializeApiProvider();

	return {
		props: {
			initialApiProviderState: apiProvider.cache.extract(),
			name: "decks",
		},
		revalidate: 1,
	};
};

const DecksPage: FunctionComponent = () => {
	return <div>Decks Page</div>;
};

export default DecksPage;
