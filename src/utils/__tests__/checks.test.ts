import { isQueryConditionRespected } from "../checks";
import { pagesMetasApiSample } from "@Samples/api/page";

describe("isQueryConditionRespected", () => {
	test("Condition respected", () => {
		expect(
			isQueryConditionRespected(pagesMetasApiSample.pages[0], {
				condition: "name",
				value: "cards",
			}),
		).toBeTruthy();
	});

	test("Condition not respected", () => {
		expect(
			isQueryConditionRespected(pagesMetasApiSample.pages[0], {
				condition: "name",
				value: "articles",
			}),
		).toBeFalsy();
	});
});
