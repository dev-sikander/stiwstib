/** @type {import('next').NextConfig} */
const nextConfig = { 
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
    },
}

export default nextConfig;