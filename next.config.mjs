/** @type {import('next').NextConfig} */

// Client bookkeeping portal lives in a separate private Vercel project
// (aperture-bookkeeping, basePath /bookkeeping). This site only proxies the path,
// so clients see aperture-strategic.com/bookkeeping and no portal code or data
// is in this public repo.
const BOOKKEEPING_ORIGIN =
  process.env.BOOKKEEPING_ORIGIN || "https://aperture-bookkeeping.vercel.app";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async rewrites() {
    return [
      { source: "/bookkeeping", destination: `${BOOKKEEPING_ORIGIN}/bookkeeping` },
      { source: "/bookkeeping/:path*", destination: `${BOOKKEEPING_ORIGIN}/bookkeeping/:path*` },
    ];
  },
};

export default nextConfig;
