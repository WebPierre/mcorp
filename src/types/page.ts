export interface PageMetas {
	description: string;
	title: string;
	url: string;
}

export interface PageMetasApi {
	metas: PageMetas;
	name: string;
}

export interface PagesMetasApi {
	pages: Array<PageMetasApi>;
}

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
