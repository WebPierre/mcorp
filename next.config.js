const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
	distDir: "build",
};

module.exports = withPlugins([[withImages]], nextConfig);
