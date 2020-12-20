import { pageMetasDefault } from "@Api/default/page";
import { pagesMetasApiSample } from "@Samples/api/page";

import { toPageMetas } from "../page";

describe("toPageMetas", () => {
	test("Expect api values", () => {
		expect(toPageMetas(pagesMetasApiSample, { condition: "name", value: "cards" })).toEqual(
			pagesMetasApiSample.pages[0].metas
		);
	});

	test("Expect default values", () => {
		expect(toPageMetas(pagesMetasApiSample, { condition: "name", value: "articles" })).toEqual(
			pageMetasDefault
		);
	});
});
