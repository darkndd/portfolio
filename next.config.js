/** @type {import('next').Config} */
const nextConfig = {
  output: "export", // Enforces static HTML export for GitHub Pages hosting
  images: {
    unoptimized: true, // Disables Next.js default server-side image optimization (unsupported in static export)
  },
  // If your GitHub Pages site is hosted at https://<username>.github.io/<repository-name>,
  // you will need to uncomment the lines below and set your repository name:
  // basePath: "/your-repository-name",
  // assetPrefix: "/your-repository-name",
};

module.exports = nextConfig;
