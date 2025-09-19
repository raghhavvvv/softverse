/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Performance optimizations
  experimental: {
    optimizeCss: true,
  },
  // Compress responses
  compress: true,
  // Enable React strict mode
  reactStrictMode: true,
  // Optimize bundle
  swcMinify: true,
}
