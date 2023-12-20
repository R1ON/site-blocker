/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return [{ source: '/api/:path*', destination: 'http://localhost:5005/:path*'  }]
  }
}

module.exports = nextConfig
