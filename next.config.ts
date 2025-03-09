import type { NextConfig } from 'next';
import withNextIntl from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ["utfs.io"], // utfs.io domain allow karo
    unoptimized: true,
  },
};

/** Apply next-intl */
export default withNextIntl()(nextConfig);
