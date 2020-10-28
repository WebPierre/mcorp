import { pageMetasQuery } from "@Api/queries/page";
import { pagesMetasApiSample } from "@Samples/api/page";

export const pagesMetasApiMock = [
	{
		request: {
			query: pageMetasQuery,
			variables: {
				name: "cards",
			},
		},
		result: {
			data: pagesMetasApiSample,
		},
	},
];
