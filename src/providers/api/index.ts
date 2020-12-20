/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = () => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			credentials: "same-origin",
			uri: process.env.DATABASE_URL,
		}),
		ssrMode: typeof window === "undefined",
	});
};

export const initializeApiProvider = (initialState?: ApolloClient<NormalizedCacheObject>) => {
	const initialApolloClient = apolloClient ?? createApolloClient();

	if (initialState) {
		const existingCache = initialApolloClient.extract();

		// @ts-ignore
		initialApolloClient.cache.restore({ ...existingCache, ...initialState });
	}

	// On server always create a new Apollo Client
	if (typeof window === "undefined") return initialApolloClient;

	apolloClient = apolloClient ?? initialApolloClient;

	return apolloClient;
};

export const getApiProvider = (initialApiProviderState: ApolloClient<NormalizedCacheObject>) => {
	return initializeApiProvider(initialApiProviderState);
};
