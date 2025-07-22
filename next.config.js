/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    // Temporary workaround for caching issues
    if (process.env.NODE_ENV === "development") {
      config.cache = false;
    }

    // Important: return the modified config
    return config;
  },
  experimental: {
    // This can help with module resolution
    externalDir: true,
  },
};

module.exports = nextConfig;
