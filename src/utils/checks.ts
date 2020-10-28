import { PageMetasApi } from "@Types/page";

export const isQueryConditionRespected = (
	data: PageMetasApi,
	check: { condition: keyof typeof data; value: string },
): boolean => {
	return data && data[check.condition] === check.value ? true : false;
};
