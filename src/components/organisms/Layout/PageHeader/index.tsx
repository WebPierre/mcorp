import React, { FunctionComponent } from "react";

import ArticlesIcon from "@Images/icons/articles.svg";
import CardsIcon from "@Images/icons/cards.svg";
import DecksIcon from "@Images/icons/decks.svg";
import ExtensionsIcon from "@Images/icons/extensions.svg";
import ForumsIcon from "@Images/icons/forums.svg";
import RulesIcon from "@Images/icons/rules.svg";
import ShopIcon from "@Images/icons/shop.svg";
import { PageCategory } from "@Types/page";

import PageHeaderItem from "./PageHeaderItem";

const PageHeader: FunctionComponent = () => {
	const pageCategories: Array<PageCategory> = [
		{
			icon: "",
			label: "",
			name: "home",
			path: "/",
		},
		{
			icon: CardsIcon,
			label: "CARTES",
			name: "cards",
			path: "/cards",
		},
		{
			icon: ExtensionsIcon,
			label: "EXTENSIONS",
			name: "extensions",
			path: "/extensions",
		},
		{
			icon: DecksIcon,
			label: "DECKS",
			name: "decks",
			path: "/decks",
		},
		{
			icon: ArticlesIcon,
			label: "ARTICLES",
			name: "articles",
			path: "/articles",
		},
		{
			icon: RulesIcon,
			label: "REGLES",
			name: "rules",
			path: "/rules",
		},
		{
			icon: ForumsIcon,
			label: "FORUMS",
			name: "forums",
			path: "/forums",
		},
		{
			icon: ShopIcon,
			label: "BOUTIQUE",
			name: "shop",
			path: "/shop",
		},
	];

	return (
		<nav className="PageHeader">
			{pageCategories.map((page) => (
				<PageHeaderItem item={page} key={page.name} />
			))}
		</nav>
	);
};

export default PageHeader;
