import React, { FunctionComponent, ReactNode } from "react";

import PageHeader from "./PageHeader";

interface Props {
	children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
	return (
		<div className="Page">
			<header className="Page-header">
				<PageHeader />
			</header>
			<main className="Page-main">{children}</main>
		</div>
	);
};

export default Layout;
