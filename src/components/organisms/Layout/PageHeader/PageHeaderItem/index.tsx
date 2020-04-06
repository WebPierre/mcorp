import React, { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

import { PageCategory } from "@Types/page";

import "./style.scss";

interface Props {
	item: PageCategory;
}

const PageHeaderItem: FunctionComponent<Props> = ({ item }) => {
	const router = useRouter();
	const Icon = item.icon;

	return (
		<Link href={item.path}>
			<button
				className={classNames("PageHeaderItem", {
					"PageHeaderItem--selected": router.pathname === item.path,
				})}
			>
				<div className="PageHeaderItem-icon">
					<Icon />
				</div>
				<span className="PageHeaderItem-text">{item.label}</span>
			</button>
		</Link>
	);
};

export default PageHeaderItem;
