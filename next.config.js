const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
	distDir: "build",
	env: {
		DATABASE_URL: "https://internal-monarch-18.hasura.app/v1/graphql",
	},
};

module.exports = withPlugins([[withImages]], nextConfig);
