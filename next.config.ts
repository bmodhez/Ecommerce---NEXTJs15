import type { NextConfig } from 'next';
import withNextIntl from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
    ],
  },
};

/** Apply next-intl */
export default withNextIntl()(nextConfig);
