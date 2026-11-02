import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/political-party-banners', destination: '/political-banner', permanent: true },
      { source: '/political-party-banners/bjp', destination: '/political-banner/bjp-election-banner', permanent: true },
      { source: '/political-party-banners/inc', destination: '/political-banner/congress-election-banner', permanent: true },
      { source: '/political-party-banners/shiv-sena', destination: '/political-banner/shiv-sena-banner', permanent: true },
      { source: '/political-party-banners/shiv-sena-ubt', destination: '/political-banner/shiv-sena-ubt-banner', permanent: true },
      { source: '/political-party-banners/ncp', destination: '/political-banner/ncp-election-banner', permanent: true },
      { source: '/political-party-banners/ncp-sp', destination: '/political-banner/sharad-pawar-banner', permanent: true },
      { source: '/political-party-banners/mns', destination: '/political-banner/mns-election-banner', permanent: true },
      { source: '/political-party-banners/aap', destination: '/political-banner/aap-election-banner', permanent: true },
      { source: '/political-party-banners/bsp', destination: '/political-banner/bsp-election-banner', permanent: true },
      { source: '/political-party-banners/sp', destination: '/political-banner/samajwadi-party-banner', permanent: true },
    ]
  }
};

export default nextConfig;
