/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "", // Empty for custom domain
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
