import React, { FunctionComponent, ReactNode } from "react";
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from "@apollo/client";

import { getApiProvider } from "./";

interface Props {
	children: ReactNode;
	initialState: ApolloClient<NormalizedCacheObject>;
}

const WithApiProvider: FunctionComponent<Props> = ({ children, initialState }) => {
	const client = getApiProvider(initialState);

	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default WithApiProvider;
