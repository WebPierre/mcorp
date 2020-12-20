module.exports = {
	collectCoverageFrom: [
		"src/**/*.{ts,tsx}",
		"!<rootDir>/node_modules/",
		"!src/**/index.stories.{ts,tsx}",
	],
	moduleFileExtensions: ["js", "ts", "tsx", "json"],
	moduleNameMapper: {
		"^@Api(.*)$": "<rootDir>/src/providers/api$1",
		"^@Atoms(.*)$": "<rootDir>/src/components/atoms$1",
		"^@Images(.*)$": "<rootDir>/src/images$1",
		"^@Organisms(.*)$": "<rootDir>/src/components/organisms$1",
		"^@Samples(.*)$": "<rootDir>/src/samples$1",
		"^@State(.*)$": "<rootDir>/src/providers/state$1",
		"^@Storybook(.*)$": "<rootDir>/.storybook$1",
		"^@Types(.*)$": "<rootDir>/src/types$1",
		"^@Utils(.*)$": "<rootDir>/src/utils$1",
		"\\.(jpg|jpeg|gif|png|mp4|mkv|avi|webm|swf|wav|mid)$": "jest-static-stubs/$1",
		"\\.(scss|eot|otf|svg|ttf|woff|woff2|mp3|m4a|aac|oga)$": "identity-obj-proxy",
	},
	roots: ["<rootDir>"],
	testMatch: ["<rootDir>/src/**/__tests__/**/*.{ts,tsx}", "<rootDir>/src/**/index.test.{ts,tsx}"],
	testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
	transform: {
		"^.+\\.(ts|tsx)$": "babel-jest",
	},
	transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
	watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
};
