import { pageMetasDefault } from "@Api/default/page";
import { PageMetas, PagesMetasApi } from "@Types/page";
import { isQueryConditionRespected } from "@Utils/checks";

export const toPageMetas = (
	data: PagesMetasApi,
	check: { condition: keyof typeof data.pages[0]; value: string },
): PageMetas => {
	if (data && isQueryConditionRespected(data.pages[0], check)) {
		return {
			description: data.pages[0].metas.description || pageMetasDefault.description,
			title: data.pages[0].metas.title || pageMetasDefault.description,
			url: data.pages[0].metas.url || pageMetasDefault.description,
		};
	} else {
		return {
			description: pageMetasDefault.description,
			title: pageMetasDefault.title,
			url: pageMetasDefault.url,
		};
	}
};
