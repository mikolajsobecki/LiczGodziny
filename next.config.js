/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Disable static optimization features incompatible with static export
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

module.exports = nextConfig;
