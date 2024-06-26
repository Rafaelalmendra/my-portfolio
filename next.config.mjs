import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['www.datocms-assets.com'],
  },
};

export default withNextIntl(nextConfig);
