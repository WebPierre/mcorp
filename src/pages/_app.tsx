import React, { useState } from "react";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import Router from "next/router";

import WithApiProvider from "@Api/WithApiProvider";
import Head from "@Components/atoms/Head";
import Loader from "@Components/atoms/Loader";
import Layout from "@Components/organisms/Layout";

import "../index.scss";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
	Component,
	pageProps,
}: AppProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	Router.events.on("routeChangeStart", () => setIsLoading(true));
	Router.events.on("routeChangeComplete", () => setIsLoading(false));
	Router.events.on("routeChangeError", () => setIsLoading(false));

	return (
		<WithApiProvider initialState={pageProps.initialApiProviderState}>
			<Head pageName={pageProps.name} />
			<Layout>
				<Component {...pageProps} />
			</Layout>
			{isLoading && <Loader hidingPage={true} onFullPage={true} />}
		</WithApiProvider>
	);
};

export default App;
