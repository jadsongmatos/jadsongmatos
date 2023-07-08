/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  distDir: 'docs',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
