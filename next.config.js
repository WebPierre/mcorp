const tsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const withFonts = require("next-fonts");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withSourceMaps = require("@zeit/next-source-maps");

const nextConfig = {
	distDir: "build",
	useFileSystemPublicRoutes: true,
	webpack(config) {
		config.resolve.extensions.push(".ts", ".tsx");
		config.resolve.plugins = [new tsconfigPathsPlugin()];

		return config;
	},
};

module.exports = withPlugins(
	[
		[withFonts],
		[withImages],
		[withSass],
		[
			withSourceMaps,
			{
				devtool: "cheap-module-eval-source-map",
			},
		],
	],
	nextConfig,
);
