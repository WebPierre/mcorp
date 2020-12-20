import gql from "graphql-tag";

export const pageMetasQuery = gql`
	query getPageMetas($name: String) {
		pages(where: { name: { _eq: $name } }) {
			metas
			name
		}
	}
`;
