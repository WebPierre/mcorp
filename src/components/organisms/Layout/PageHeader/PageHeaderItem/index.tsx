import { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

import { PageCategory } from "@Types/page";

import logo from "@Images/logo.png";

interface Props {
	item: PageCategory;
}

const PageHeaderItem: FunctionComponent<Props> = ({ item }) => {
	const router = useRouter();
	const Icon = item.icon;

	return (
		<Link href={item.path}>
			{item.name === "home" ? (
				<img className="PageHeader-image" alt="Logo MagicCorporation" src={logo} />
			) : (
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
			)}
		</Link>
	);
};

export default PageHeaderItem;
