/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',           // Empty for custom domain
  assetPrefix: '',        // Empty for custom domain
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  // Keep this for now (v0.dev projects often have minor TS issues)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
