// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  basePath: '/gh-pages-test',
  reactStrictMode: false,
  images: {
    domains: ["github-readme-stats.vercel.app", "api.qrserver.com"],
  },
}

module.exports = nextConfig