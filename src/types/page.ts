export type PageCategoryName =
	| "articles"
	| "cards"
	| "decks"
	| "extensions"
	| "forums"
	| "home"
	| "rules"
	| "shop";

export interface PageCategory {
	icon: string;
	label: string;
	name: PageCategoryName;
	path: string;
}
