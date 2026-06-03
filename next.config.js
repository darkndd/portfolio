/** @type {import('next').Config} */
const nextConfig = {
  output: "export", // Enforces static HTML export for GitHub Pages hosting
  images: {
    unoptimized: true, // Disables Next.js default server-side image optimization (unsupported in static export)
  },
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
};

module.exports = nextConfig;
