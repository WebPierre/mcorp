const path = require("path");

module.exports = ({ config }) => {
	config.module.rules.push({
		loader: require.resolve("babel-loader"),
		options: {
			presets: [["react-app", { flow: false, typescript: true }]],
		},
		test: /\.(ts|tsx)$/,
	});

	config.module.rules.push({
		include: path.resolve(__dirname, "../"),
		test: /\.scss$/,
		use: ["style-loader", "css-loader", "sass-loader"],
	});

	config.resolve.extensions.push(".ts", ".tsx");

	return config;
};
