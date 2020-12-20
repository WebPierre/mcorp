import React, { FunctionComponent, ReactNode, useMemo } from "react";
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from "@apollo/client";

import { getApiProvider } from "./";

interface Props {
	children: ReactNode;
	initialState: ApolloClient<NormalizedCacheObject>;
}

const WithApiProvider: FunctionComponent<Props> = ({ children, initialState }) => {
	const client = useMemo(() => getApiProvider(initialState), [initialState]);

	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default WithApiProvider;
