module.exports = {
	collectCoverageFrom: [
		"src/**/*.{ts,tsx}",
		"!<rootDir>/node_modules/",
		"!src/**/stories.{ts,tsx}",
	],
	moduleNameMapper: {
		"^@Components(.*)$": "<rootDir>/src/components$1",
		"^@Icons(.*)$": "<rootDir>/src/icons$1",
		"^@Samples(.*)$": "<rootDir>/src/samples$1",
		"^@Storybook(.*)$": "<rootDir>/.storybook$1",
		"^@Types(.*)$": "<rootDir>/src/types$1",
		"\\.(jpg|jpeg|gif|png|mp4|mkv|avi|webm|swf|wav|mid)$": "jest-static-stubs/$1",
		"\\.(scss|eot|otf|svg|ttf|woff|woff2|mp3|m4a|aac|oga)$": "identity-obj-proxy",
	},
	setupFiles: ["<rootDir>/jest.setup.js"],
	testEnvironment: "jest-environment-jsdom-fifteen",
	testMatch: ["<rootDir>/src/**/__tests__/**/*.{ts,tsx}", "<rootDir>/src/**/*.test.{ts,tsx}"],
	watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
};
