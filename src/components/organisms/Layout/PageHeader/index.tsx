import React, { FunctionComponent } from "react";
import Link from "next/link";

import ArticlesIcon from "@Icons/articles.svg";
import CardsIcon from "@Icons/cards.svg";
import DecksIcon from "@Icons/decks.svg";
import ExtensionsIcon from "@Icons/extensions.svg";
import ForumsIcon from "@Icons/forums.svg";
import RulesIcon from "@Icons/rules.svg";
import ShopIcon from "@Icons/shop.svg";
import { PageCategory } from "@Types/page";

import PageHeaderItem from "./PageHeaderItem";
import logo from "./logo.png";
import "./style.scss";

const PageHeader: FunctionComponent<{}> = () => {
	const pageCategories: Array<PageCategory> = [
		{
			icon: CardsIcon,
			id: "cards",
			label: "CARTES",
			path: "/cards",
		},
		{
			icon: ExtensionsIcon,
			id: "extensions",
			label: "EXTENSIONS",
			path: "/extensions",
		},
		{
			icon: DecksIcon,
			id: "decks",
			label: "DECKS",
			path: "/decks",
		},
		{
			icon: ArticlesIcon,
			id: "articles",
			label: "ARTICLES",
			path: "/articles",
		},
		{
			icon: RulesIcon,
			id: "rules",
			label: "REGLES",
			path: "/rules",
		},
		{
			icon: ForumsIcon,
			id: "forums",
			label: "FORUMS",
			path: "/forums",
		},
		{
			icon: ShopIcon,
			id: "shop",
			label: "BOUTIQUE",
			path: "/shop",
		},
	];

	return (
		<nav className="PageHeader">
			<Link href="/">
				<img className="PageHeader-image" alt="Logo MagicCorporation" src={logo} />
			</Link>
			{pageCategories.map((page) => (
				<PageHeaderItem item={page} key={page.id} />
			))}
		</nav>
	);
};

export default PageHeader;
