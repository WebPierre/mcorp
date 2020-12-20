import CardsIcon from "@Images/icons/cards.svg";
import { PageCategory, PageMetas } from "@Types/page";

export const pageCategorySample: PageCategory = {
	icon: CardsIcon,
	label: "CARTES",
	name: "cards",
	path: "/cards",
};

export const pageMetas: PageMetas = {
	description: "Toutes les cartes de Magic: The Gathering.",
	title: "Recherche de cartes",
	url: "https://www.magiccorporation.com/cards",
};
