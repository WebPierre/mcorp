import React from "react";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";

import Head from "@Components/atoms/Head";
import Layout from "@Components/organisms/Layout";
import { Meta } from "@Types/head";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
	Component,
	pageProps,
}: AppProps) => {
	const { description, title, url } = pageProps;

	return (
		<>
			<Head description={description} title={title} url={url} />
			<Layout>
				<Component />
			</Layout>
		</>
	);
};

App.getInitialProps = (): AppInitialProps | Promise<AppInitialProps> => {
	const pageProps: Meta = {
		description:
			"Tout savoir sur le jeu Magic: The Gathering de façon simple et précise. Apprenez les règles les plus obscures, achetez des boosters ou des cartes précises dans la boutique, découvrez des combos extraordinaires, copiez les decks des champions, restez au courant de l'actualité Magic, parlez avec la communauté sur nos forums et tant d'autres choses.",
		title: "MagicCorporation : LE site FR sur Magic: The Gathering",
		url: "https://www.magiccorporation.com",
	};

	return { pageProps };
};

export default App;
