/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: 'standalone',
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'placehold.jp',
				pathname: '/**',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'images.rollingstonejapan.com',
				pathname: '/**',
				port: '',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '8080',
				pathname: '/**',
			},
		],
	},
}

module.exports = nextConfig
