/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wp23.cryscampus.com',
                port: '',
                pathname: '/**',
            }
        ]
    }
}

export default nextConfig;