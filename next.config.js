/** @type {import('next').NextConfig} */

const path = require("path");
const withVideos = require("next-videos");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
module.exports = withVideos();
