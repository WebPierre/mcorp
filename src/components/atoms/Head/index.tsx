import { FunctionComponent, useEffect } from "react";
import NextHead from "next/head";
import { useQuery } from "@apollo/client";

import { toPageMetas } from "@Api/formats/page";
import { pageMetasQuery } from "@Api/queries/page";
import { useStateContext } from "@State/context";
import { PageMetas } from "@Types/page";

interface ContainerProps {
	pageName: string;
}

export interface Props {
	pageMetas: PageMetas;
}

export const Head: FunctionComponent<Props> = ({ pageMetas }) => {
	return (
		<NextHead>
			<title>{pageMetas.title}</title>

			<meta content="IE=Edge,chrome=1" httpEquiv="X-UA-Compatible" />

			<meta content="width=device-width, initial-scale=1 shrink-to-fit=no" name="viewport" />

			<meta content="yes" name="apple-mobile-web-app-capable" />
			<meta content="default" name="apple-mobile-web-app-status-bar-style" />
			<meta content="MagicCorporation" name="apple-mobile-web-app-title" />

			<meta content={pageMetas.description} name="description" />
			<meta content="website" property="og:type" />
			<meta content="MagicCorporation" property="og:site_name" />
			<meta content={pageMetas.url} property="og:url" />
			<meta content={pageMetas.title} property="og:title" />
			<meta content={pageMetas.description} property="og:description" />

			<link href="/apple-touch-icon.png" rel="apple-touch-icon-precomposed" sizes="180x180" />
			<link color="#00415b" href="/safari-pinned-tab.svg" rel="mask-icon" />
			<link href="/icon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
			<link href="/icon-16x16.png" rel="icon" sizes="16x16" type="image/png" />

			<link href="/manifest.json" rel="manifest" />

			<link href="https://fonts.googleapis.com/css?family=Nunito:400,700" rel="stylesheet" />
		</NextHead>
	);
};

const HeadContainer: FunctionComponent<ContainerProps> = ({ pageName }) => {
	const { data, loading } = useQuery(pageMetasQuery, {
		variables: { name: pageName },
	});
	const { dispatch } = useStateContext();

	useEffect(() => {
		if (loading) {
			dispatch({
				apiResponsePending: true,
				type: "setApiResponsePending",
			});
		} else if (data) {
			dispatch({
				apiResponsePending: false,
				type: "setApiResponsePending",
			});
		}
	}, [data, loading]);

	return <Head pageMetas={toPageMetas(data, { condition: "name", value: pageName })} />;
};

export default HeadContainer;
