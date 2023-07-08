/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  distDir: 'docs',
  basePath: "/jadsongmatos",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
