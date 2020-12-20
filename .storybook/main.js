module.exports = {
	addons: ["@storybook/addon-actions", "@storybook/addon-controls"],
	stories: ["../src/**/index.stories.tsx"],
	webpackFinal: async (config) => {
		config.module.rules.push({
			loader: require.resolve("babel-loader"),
			options: {
				presets: [["react-app", { flow: false, typescript: true }]],
			},
			test: /\.(ts|tsx)$/,
		});

		config.module.rules.push({
			test: /\.scss$/,
			use: ["style-loader", "css-loader", "sass-loader"],
		});

		config.resolve.extensions.push(".ts", ".tsx");

		return config;
	},
};
