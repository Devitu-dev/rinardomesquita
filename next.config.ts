import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'books.google.com',
        pathname: '/books/content',
      },
      {
        protocol: 'https',
        hostname: 'hageqoxbr0wzol2y.public.blob.vercel-storage.com',
        pathname: '/galery/**',
      },
    ],
  },
};

export default nextConfig;
