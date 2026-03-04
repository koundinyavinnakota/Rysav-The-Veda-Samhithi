/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Rysav-The-Veda-Samhithi",
  assetPrefix: "/Rysav-The-Veda-Samhithi",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};
module.exports = nextConfig;
