import React from "react";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";

import WithApiProvider from "@Api/WithApiProvider";
import Head from "@Atoms/Head";
import Layout from "@Organisms/Layout";
import WithStateProvider from "@State/WithStateProvider";

import "../index.scss";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
	Component,
	pageProps,
	router,
}: AppProps) => {
	return (
		<WithApiProvider initialState={pageProps.initialApiProviderState}>
			<WithStateProvider>
				<Head pageName={pageProps.name} />
				<Layout>
					<Component {...pageProps} key={router.route} />
				</Layout>
			</WithStateProvider>
		</WithApiProvider>
	);
};

export default App;
