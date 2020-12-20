import { pagesMetasApiSample } from "@Samples/api/page";

import { isQueryConditionRespected } from "../checks";

describe("isQueryConditionRespected", () => {
	test("Condition respected", () => {
		expect(
			isQueryConditionRespected(pagesMetasApiSample.pages[0], {
				condition: "name",
				value: "cards",
			})
		).toBeTruthy();
	});

	test("Condition not respected", () => {
		expect(
			isQueryConditionRespected(pagesMetasApiSample.pages[0], {
				condition: "name",
				value: "articles",
			})
		).toBeFalsy();
	});
});
