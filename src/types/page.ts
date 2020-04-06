export type PageId = "articles" | "cards" | "decks" | "extensions" | "forums" | "rules" | "shop";

export interface PageCategory {
	icon: string;
	id: PageId;
	label: string;
	path: string;
}
