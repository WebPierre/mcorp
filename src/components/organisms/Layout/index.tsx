import { FunctionComponent, ReactNode } from "react";

import Loader from "@Atoms/Loader";
import { useStateContext } from "@State/context";

import PageHeader from "./PageHeader";

interface ContainerProps {
	children: ReactNode;
}

export interface Props extends ContainerProps {
	loading: boolean;
}

export const Layout: FunctionComponent<Props> = ({ children, loading }) => {
	return (
		<div className="Page">
			<header className="Page-header">
				<PageHeader />
			</header>
			<main className="Page-main">{children}</main>
			{loading && <Loader hidingPage={true} onFullPage={true} />}
		</div>
	);
};

const LayoutContainer: FunctionComponent<ContainerProps> = ({ children }) => {
	const { ui } = useStateContext();

	return <Layout loading={ui.apiResponsePending}>{children}</Layout>;
};

export default LayoutContainer;
