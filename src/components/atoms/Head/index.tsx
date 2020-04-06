import React, { FunctionComponent } from "react";
import NextHead from "next/head";

interface Props {
	description: string;
	title: string;
	url: string;
}

const Head: FunctionComponent<Props> = ({ description, title, url }) => {
	return (
		<NextHead>
			<title>{title}</title>

			<meta content="IE=Edge,chrome=1" httpEquiv="X-UA-Compatible" />

			<meta content="width=device-width, initial-scale=1 shrink-to-fit=no" name="viewport" />

			<meta content="yes" name="apple-mobile-web-app-capable" />
			<meta content="default" name="apple-mobile-web-app-status-bar-style" />
			<meta content="MagicCorporation" name="apple-mobile-web-app-title" />

			<meta content={description} name="description" />
			<meta content="website" property="og:type" />
			<meta content="MagicCorporation" property="og:site_name" />
			<meta content={url} property="og:url" />
			<meta content={title} property="og:title" />
			<meta content={description} property="og:description" />

			<link href="/apple-touch-icon.png" rel="apple-touch-icon-precomposed" sizes="180x180" />
			<link color="#00415b" href="/safari-pinned-tab.svg" rel="mask-icon" />
			<link href="/icon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
			<link href="/icon-16x16.png" rel="icon" sizes="16x16" type="image/png" />

			<link href="/manifest.json" rel="manifest" />

			<link href="https://fonts.googleapis.com/css?family=Nunito:400,700" rel="stylesheet" />
		</NextHead>
	);
};

export default Head;
